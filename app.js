(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function gm(ll){return 'https://www.google.com/maps/search/?api=1&query='+ll[0]+','+ll[1]}
function gmq(q){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q)}
function gdir(o,d,w,mode){return 'https://www.google.com/maps/dir/?api=1&origin='+o.join(',')+'&destination='+d.join(',')+(w&&w.length?'&waypoints='+w.map(function(x){return x.join(',')}).join('%7C'):'')+'&travelmode='+(mode||'driving')}
function dist(a,b){var R=6371000,r=Math.PI/180,dl=(b[0]-a[0])*r,dn=(b[1]-a[1])*r,x=Math.sin(dl/2)*Math.sin(dl/2)+Math.cos(a[0]*r)*Math.cos(b[0]*r)*Math.sin(dn/2)*Math.sin(dn/2);return 2*R*Math.asin(Math.sqrt(x))}
function fm(m){return m<1000?Math.round(m/10)*10+' m':(m/1000).toFixed(1).replace('.',',')+' km'}
function hm(m){return Math.floor(m/60)+' h '+('0'+(m%60)).slice(-2)+' min'}
var P=window.PHOTOS,R=window.ROUTES,S={};
var NM={kawa:'Jazero Kawaguchi (atmosféra)',gotemba:'Gotemba Premium Outlets'};function nameOf(k){return S[k]?S[k].name:(NM[k]||k)}
window.SPOTS.forEach(function(s){S[s.key]=s});

/* ---------- Časový plán ---------- */
var TL=[
 ['9:00','Orix Mukōjima: prevzatie auta','Pobočka otvára o 8:00, rezervácia od 9:00. Auto zostáva cez noc, vrátenie vo štvrtok o 8:00. Tel. pobočky 03-3612-0543.'],
 ['9:30','Odchod do Fujinomiye','OSRM 2 h 9 min (156 km) bez premávky; s rezervou a prestávkou ~2 h 45 min.'],
 ['12:15','Fujinomiya: Širaito + Otodome (~1 h)','Parkovisko 500 ¥, vodopády zadarmo. Najjemnejšie svetlo okolo poludnia.'],
 ['13:15','Odchod, obed cestou','Konbini alebo food corner pri Aokigahare; 21 min jazdy podľa OSRM, v pláne ~45 min s obedom.'],
 ['14:00','Aokigahara: prechádzka po Tokai Nature Trail (~40 min)','Parkovisko Fugaku (zadarmo), len značený chodník lávovým lesom s machom. BEZ JASKÝŇ. Otoč sa po ~20 min a vráť sa k autu.'],
 ['14:40','Odchod do Kawaguchika','12 min jazdy. Auto na Fujiyama Parking (200 ¥ / 30 min, prvých 30 min zadarmo).'],
 ['15:05','E-bicykle zo Soranoshity (A)','Vrátiť do 18:00. Ušetrených ~10 minút oproti starému plánu ide sem a na západ.'],
 ['15:20','Ubuyagasaki + most Ohashi (10 min)','2,9 km od stanice, ~12 min e-bicyklom.'],
 ['15:45','Oishi Park + terasa NLC (~25 min)','3,9 km od Ubuyagasaki, ~15 min e-bicyklom.'],
 ['16:15','Nagasaki Park: príprava na západ','1,3 km od Oishi (~6 min). Stojan a pozícia pre záber.'],
 ['16:41','Západ slnka (súmrak 17:08)','Ružová Fuji ~16:30–17:00 je možná, nie zaručená. Slnko je 60° vpravo od hory.'],
 ['17:00','Jazda späť na bicykli, so svetlami','5,5 km, ~22–25 min.'],
 ['17:30','Vrátiť bicykle (limit 18:00)','Rezerva ~30 min.'],
 ['17:40','Odchod do Gotemby','OSRM 36 min (34 km), s rezervou príchod ~18:25.'],
 ['18:25','Gotemba Premium Outlets','Obchody do 20:00, parkovisko zadarmo, večera v outlete.'],
 ['20:00','Odchod a tankovanie','Natankujte večer, ráno nie je čas.'],
 ['~22:15','Ubytovanie v Higashimukōjime','Auto cez noc na parkovisku mimo ulice (pozri „Návrat auta“).'],
 ['štv 7:45','Odchod do Orixu, vrátenie o 8:00','Potom o 8:30 odchod na NRT T3, let 7C1188 o 12:05.']
];
$('#tl').innerHTML=TL.map(function(r){return '<li><div class="t">'+r[0]+'</div><div class="d"><b>'+r[1]+'</b><span>'+r[2]+'</span></div></li>'}).join('');

/* ---------- Mapa ---------- */
var map=L.map('map',{zoomControl:true,preferCanvas:false,tap:true}).setView([35.5,138.75],9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,detectRetina:true,attribution:'© prispievatelia <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
function pin(txt,bg,size,sq){return L.divIcon({className:'',html:'<div class="pin'+(sq?' sq':'')+'" style="background:'+bg+';width:'+size+'px;height:'+size+'px">'+txt+'</div>',iconSize:[size,size],iconAnchor:[size/2,size/2],popupAnchor:[0,-size/2]})}
function line(pts,color,w,dash,op){return L.polyline(pts,{color:color,weight:w||5,opacity:op||.85,dashArray:dash||null,lineJoin:'round'})}
function seg(keys){var a=[];keys.forEach(function(k){a=a.concat(R[k].pts)});return a}
var LG={car:L.layerGroup(),bike:L.layerGroup(),back:L.layerGroup(),stops:L.layerGroup(),sun:L.layerGroup(),shops:L.layerGroup(),opt:L.layerGroup(),cams:L.layerGroup(),altB:L.layerGroup(),altC:L.layerGroup(),side:L.layerGroup()};
line(seg(['orix-fuji','fuji-aoki','aoki-station']),'#d62828',5).bindTooltip('Cesta autom tam (OSRM, ilustračná)',{sticky:true}).addTo(LG.car);
line(R.bike.pts,'#2d8a4e',5,'8 7').bindTooltip('Bicykel: stanica → Ubuyagasaki → Oishi → Nagasaki → stanica (OSM bike, ilustračná)',{sticky:true}).addTo(LG.bike);
line(seg(['station-gotemba','gotemba-orix']),'#1d4e89',5,'10 8').bindTooltip('Návrat cez Gotembu do Orixu (OSRM)',{sticky:true}).addTo(LG.back);
line(seg(['aoki-iyashi','iyashi-station']),'#888',4,'3 7',.9).bindTooltip('Voliteľná odbočka cez Saiko Iyashi no Sato (+9 min)',{sticky:true}).addTo(LG.side);
line(seg(['orix-chureito','chureito-honcho','honcho-oshino','oshino-station']),'#2a9d8f',5,null,.9).bindTooltip('Variant B: Chureito → Honcho → Oshino → stanica',{sticky:true}).addTo(LG.altB);
line(seg(['aoki-panorama','panorama-gotemba']),'#7b2cbf',5,null,.9).bindTooltip('Variant C: Aokigahara → Panorama-dai → Gotemba',{sticky:true}).addTo(LG.altC);
function popupHtml(title,sub,ll,extra){return '<b>'+esc(title)+'</b>'+(sub?'<div>'+esc(sub)+'</div>':'')+(extra||'')+'<div style="margin-top:6px"><a href="'+gm(ll)+'" target="_blank" rel="noopener">Google Maps</a></div>'}
window.STOPS.forEach(function(s){
  var m=L.marker(s.ll,{icon:pin(s.n===0?'🚗':s.n,s.n===0?'#555':'#d62828',30)}).bindPopup(popupHtml(s.n+' · '+s.name,s.when+' – '+s.note,s.ll)).addTo(LG.stops);
});
window.SUNSET.forEach(function(s){L.marker(s.ll,{icon:pin(s.id,'#e07a1f',28)}).bindPopup(popupHtml(s.id+' · '+s.name,s.comp,s.ll)).addTo(LG.sun)});
window.SHOPS.forEach(function(s){L.marker(s.ll,{icon:pin(s.id,s.ok?'#14532d':'#777',24,true),opacity:s.approx?.75:1}).bindPopup(popupHtml('Požičovňa '+s.id+' · '+s.name+(s.approx?' (poloha približná)':''),s.price,s.ll)).addTo(LG.shops)});
window.SPOTS.forEach(function(s){if(s.tag==='opt'||s.tag==='skip'){L.marker(s.ll,{icon:pin('★','#6b5b95',26)}).bindPopup(popupHtml(s.name,s.off,s.ll,'<div style="margin-top:6px"><a href="#spot-'+s.key+'">Fotky a info ↓</a></div>')).addTo(LG.opt)}});
L.marker(window.COIN,{icon:pin('P','#0b7285',26,true),opacity:.85}).bindPopup('<b>Coin parking – hint</b><div>Približná oblasť Higashimukōjima (nie presná adresa ubytovania). V mapách hľadaj „コインパーキング 東向島“. Parkovanie cez noc musí byť mimo ulice.</div><a href="'+gmq('コインパーキング 東向島')+'" target="_blank" rel="noopener">Hľadať v Google Maps</a>').addTo(LG.stops);
// kamery: pozície fotografov
var camMarkers={},hiLines=L.layerGroup().addTo(map);
Object.keys(P).forEach(function(k){P[k].forEach(function(p,i){if(p.lat==null)return;
  var sp=S[k];var m=L.marker([p.lat,p.lon],{icon:L.divIcon({className:'',html:'<div class="cam">📷</div>',iconSize:[20,20],iconAnchor:[10,10]}),zIndexOffset:500}).addTo(LG.cams);
  var d=sp?fm(dist([p.lat,p.lon],sp.ll)):'';
  m.bindPopup('<b>📷 '+esc(sp?sp.name:k)+', foto '+(i+1)+'</b><div>Pozícia fotografa (geotag Commons)'+(d?' · '+d+' od bodu':'')+'</div><img src="photos/'+p.id+'_t.jpg" alt="" data-lb="'+k+':'+i+'"><div style="font-size:12px">'+esc(p.artist)+' · '+esc(p.lic)+'</div>');
  (camMarkers[k]=camMarkers[k]||[]).push(m);
})});
['car','bike','back','stops','sun','shops','opt'].forEach(function(k){LG[k].addTo(map)});
var cams=$('#t-cams'),alts={B:LG.altB,C:LG.altC};
function bindToggle(id,lg){var e=$(id);if(!e)return;e.addEventListener('change',function(){e.checked?lg.addTo(map):map.removeLayer(lg)})}
[['#t-car',LG.car],['#t-bike',LG.bike],['#t-back',LG.back],['#t-stops',LG.stops],['#t-sun',LG.sun],['#t-shops',LG.shops],['#t-opt',LG.opt],['#t-cams',LG.cams],['#t-altB',LG.altB],['#t-altC',LG.altC],['#t-side',LG.side]].forEach(function(x){bindToggle(x[0],x[1])});
LG.side.addTo(map);
map.on('popupopen',function(e){$$('img[data-lb]',e.popup.getElement()).forEach(function(im){im.addEventListener('click',function(){var a=im.getAttribute('data-lb').split(':');openLb(a[0],+a[1])})})});
var mainBounds=L.latLngBounds(seg(['orix-fuji','fuji-aoki','aoki-station','station-gotemba','gotemba-orix']));
function fitAll(){map.fitBounds(mainBounds,{padding:[20,20]})}
function fitFuji(){map.fitBounds(L.latLngBounds([[35.29,138.58],[35.54,138.85]]).pad(.05))}
fitFuji();
$('#b-all').onclick=fitAll;$('#b-fuji').onclick=fitFuji;
$('#b-kawa').onclick=function(){map.fitBounds([[35.495,138.735],[35.530,138.775]],{padding:[10,10]})};
// moja poloha
var locMk,locC;
function locate(){
  if(!navigator.geolocation){alert('Prehliadač nepodporuje zisťovanie polohy.');return}
  navigator.geolocation.getCurrentPosition(function(p){var ll=[p.coords.latitude,p.coords.longitude];
    if(locMk)map.removeLayer(locMk);if(locC)map.removeLayer(locC);
    locC=L.circle(ll,{radius:p.coords.accuracy,color:'#1d4e89',weight:1,fillOpacity:.1}).addTo(map);
    locMk=L.circleMarker(ll,{radius:8,color:'#fff',weight:3,fillColor:'#1d6ff2',fillOpacity:1}).addTo(map).bindPopup('Si tu (presnosť ~'+Math.round(p.coords.accuracy)+' m)').openPopup();
    map.setView(ll,Math.max(map.getZoom(),14));
  },function(e){alert('Polohu sa nepodarilo zistiť: '+(e.code===1?'povolenie zamietnuté. Povoľ polohu v prehliadači.':e.message))},{enableHighAccuracy:true,timeout:15000,maximumAge:30000});
}
var LocCtl=L.Control.extend({options:{position:'topleft'},onAdd:function(){var a=L.DomUtil.create('a','loc leaflet-bar');a.href='#';a.title='Moja poloha';a.innerHTML='◎';L.DomEvent.on(a,'click',function(e){L.DomEvent.stop(e);locate()});return a}});
new LocCtl().addTo(map);
$('#b-loc').onclick=locate;
function toMap(){$('#mapsec').scrollIntoView({behavior:'smooth'})}
// zvýraznenie miesta + kamery
function showSpot(key){
  var s=S[key];toMap();hiLines.clearLayers();
  LG.cams.addTo(map);$('#t-cams').checked=true;
  var pts=[s.ll];
  (camMarkers[key]||[]).forEach(function(m){var ll=m.getLatLng();pts.push([ll.lat,ll.lng]);L.polyline([ll,s.ll],{color:'#c026d3',weight:2,dashArray:'4 5'}).addTo(hiLines)});
  L.circleMarker(s.ll,{radius:12,color:'#c026d3',weight:3,fillOpacity:0}).addTo(hiLines);
  setTimeout(function(){map.fitBounds(L.latLngBounds(pts).pad(.5),{maxZoom:17})},450);
}
window.showSpot=showSpot;
function showOpt(id){
  toMap();hiLines.clearLayers();
  var o=window.OPTIONS.filter(function(x){return x.id===id})[0];
  var col=o.color,pts=seg(o.legs);
  var l=line(pts,col,7,null,.95).addTo(hiLines);
  setTimeout(function(){map.fitBounds(l.getBounds().pad(.1))},450);
  if(id==='B'){$('#t-altB').checked=true;LG.altB.addTo(map)}if(id==='C'){$('#t-altC').checked=true;LG.altC.addTo(map)}
}

/* ---------- Vyber si trasu ---------- */
var W=window.ORIX;
function optLink(o){
  if(o.id==='A')return gdir(W,W,[[35.31299,138.5872],[35.4775,138.6575],window.STATION,[35.3078,138.9651]]);
  if(o.id==='B')return gdir(W,W,[[35.5015,138.8008],[35.4896,138.8025],[35.459,138.8328],window.STATION,[35.3078,138.9651]]);
  return gdir(W,W,[[35.31299,138.5872],[35.4775,138.6575],[35.41261,138.90946],[35.3078,138.9651]]);
}
$('#opts').innerHTML=window.OPTIONS.map(function(o){
  return '<article class="card opt" style="border-top-color:'+o.color+'"><h3>'+esc(o.name)+'</h3><p>'+esc(o.sum)+'</p><table>'+o.rows.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+esc(r[1])+'</td></tr>'}).join('')+'</table>'+
  '<p><b>+</b> '+esc(o.pros)+'</p><p><b>−</b> '+esc(o.cons)+'</p>'+
  '<button class="btn sm" data-opt="'+o.id+'">Ukáž na mape</button><a class="btn sm sec" target="_blank" rel="noopener" href="'+optLink(o)+'">Navigácia v Google Maps</a></article>';
}).join('');
$$('[data-opt]').forEach(function(b){b.onclick=function(){showOpt(b.getAttribute('data-opt'))}});
$('#cmp').innerHTML='<thead><tr><th></th>'+window.OPTIONS.map(function(o){return '<th style="border-top:4px solid '+o.color+'">'+o.id+'</th>'}).join('')+'</tr></thead><tbody>'+
 [['Jazda autom (OSRM, bez premávky)',function(o){return hm(o.min)+' · '+o.km+' km'}],['Fotospoty',function(o){return o.stops}],['Bicykle',function(o){return o.bikes}],['Čas v Gotembe',function(o){return o.gotemba}],['Hlavné riziko',function(o){return o.cons}]].map(function(r){return '<tr><th>'+r[0]+'</th>'+window.OPTIONS.map(function(o){return '<td>'+esc(r[1](o))+'</td>'}).join('')+'</tr>'}).join('')+'</tbody>';

/* ---------- Fotospoty ---------- */
var TAGS={main:['Hlavný plán','b-main'],opt:['Voliteľné','b-opt'],skip:['Neodporúčam','b-skip']};
var BIKEABLE=['lawson','ubuya','ohashi','yagizaki','oishi','nagasaki'];
function spotCard(s){
  var ph=P[s.key]||[];var t=TAGS[s.tag];
  var gal=ph.map(function(p,i){var cam=p.lat!=null?'📷 '+fm(dist([p.lat,p.lon],s.ll))+' od bodu':'poloha foto neuvedená';
    return '<figure><img loading="lazy" src="photos/'+p.id+'_t.jpg" alt="'+esc(s.name)+', foto '+(i+1)+'" data-lb="'+s.key+':'+i+'"><figcaption>'+cam+'</figcaption></figure>'}).join('');
  var ncam=ph.filter(function(p){return p.lat!=null}).length;
  return '<article class="card spot" id="spot-'+s.key+'"><div class="head"><h3>'+(s.num?s.num+' · ':'')+esc(s.name)+'</h3><span class="badge '+t[1]+'">'+t[0]+'</span></div>'+
  '<div class="gal">'+gal+'</div>'+
  '<div class="facts"><div><b>☀ Svetlo</b> '+esc(s.light)+'</div><div><b>↔ Mimo trasy</b> '+esc(s.off)+'</div><div><b>📷 Pozície</b> '+(ncam?ncam+' z '+ph.length+' fotiek má geotag (kamera na mape po kliknutí na „Ukáž na mape“)':'žiadna z fotiek nemá uvedenú pozíciu fotografa, preto sa na mape zobrazuje len bod miesta')+'</div><div><b>ℹ Poznámka</b> '+esc(s.note)+'</div><div><b>📍 Bod</b> '+s.ll[0]+', '+s.ll[1]+'</div></div>'+
  '<button class="btn sm" data-show="'+s.key+'">Ukáž na mape</button><a class="btn sm sec" target="_blank" rel="noopener" href="'+gm(s.ll)+'">Google Maps</a><a class="btn sm sec" target="_blank" rel="noopener" href="'+gdir(window.STATION,s.ll,[],BIKEABLE.indexOf(s.key)>=0?'bicycling':'driving')+'">'+(BIKEABLE.indexOf(s.key)>=0?'Trasa zo stanice (bicykel)':'Trasa zo stanice (auto)')+'</a></article>';
}
var order=['shiraito','aoki','iyashi','lawson','ubuya','ohashi','yagizaki','oishi','nagasaki','chureito','honcho','oshino','motosu','panorama'];
$('#spots').innerHTML=order.map(function(k){return spotCard(S[k])}).join('');
$$('[data-show]').forEach(function(b){b.onclick=function(){showSpot(b.getAttribute('data-show'))}});

/* ---------- Bicykle A–E, západ ---------- */
$('#shops').innerHTML=window.SHOPS.map(function(s){return '<article class="card"><div class="head" style="display:flex;justify-content:space-between;gap:8px"><h3 style="margin:0">'+s.id+' · '+esc(s.name)+'</h3><span class="badge '+(s.ok?'b-main':'b-skip')+'">'+(s.ok?'Vhodné':'Nevhodné na západ')+'</span></div><div class="facts"><div><b>Hodiny</b> '+esc(s.hours)+'</div><div><b>Ceny</b> '+esc(s.price)+'</div><div><b>Poznámka</b> '+esc(s.note)+'</div><div><b>Poloha</b> '+s.ll[0]+', '+s.ll[1]+(s.approx?' (približne)':'')+'</div></div><a class="btn sm sec" target="_blank" rel="noopener" href="'+(s.id==='C'?gmq('富士河口湖町船津3636 レンタサイクルぷーさん'):gm(s.ll))+'">Google Maps</a><button class="btn sm" data-ll="'+s.ll.join(',')+'">Na mape</button></article>'}).join('');
$('#sunl').innerHTML=window.SUNSET.map(function(s){return '<article class="card"><h3 style="margin:0 0 4px">'+s.id+' · '+esc(s.name)+'</h3><div class="facts"><div><b>Kompozícia</b> '+esc(s.comp)+'</div><div><b>Smer a svetlo</b> '+esc(s.light)+'</div><div><b>Súradnice</b> '+s.ll[0]+', '+s.ll[1]+'</div></div><a class="btn sm sec" target="_blank" rel="noopener" href="'+gm(s.ll)+'">Google Maps</a><button class="btn sm" data-ll="'+s.ll.join(',')+'">Na mape</button></article>'}).join('');
$$('[data-ll]').forEach(function(b){b.onclick=function(){var a=b.getAttribute('data-ll').split(',').map(Number);toMap();setTimeout(function(){map.setView(a,17)},400)}});

/* ---------- Odkazy na Google Maps (trasa) ---------- */
$('#gm-all').href=optLink(window.OPTIONS[0]);
$('#gm-am').href=gdir(W,window.STATION,[[35.31299,138.5872],[35.4775,138.6575]]);
$('#gm-pm').href=gdir(window.STATION,W,[[35.3078,138.9651]]);
$('#stoplinks').innerHTML=window.STOPS.map(function(s){return '<li>'+s.n+' · <a target="_blank" rel="noopener" href="'+gm(s.ll)+'">'+esc(s.name)+'</a> <span style="color:var(--mut)">('+s.when+')</span></li>'}).join('');

/* ---------- Kredity ---------- */
var cr=[];Object.keys(P).forEach(function(k){P[k].forEach(function(p,i){cr.push('<li><b>'+esc(nameOf(k))+' · foto '+(i+1)+'</b>: „'+esc(p.title)+'“, '+esc(p.artist)+', <a href="'+esc(p.licurl)+'" target="_blank" rel="noopener">'+esc(p.lic)+'</a>, <a href="'+esc(p.page)+'" target="_blank" rel="noopener">Wikimedia Commons</a></li>')})});
$('#credits').innerHTML=cr.join('');

/* ---------- Lightbox ---------- */
var lbKey,lbI,lbList=[];
function flat(){lbList=[];Object.keys(P).forEach(function(k){P[k].forEach(function(p,i){lbList.push({k:k,i:i,p:p})})})}
flat();
function lbShow(){var it=lbList[lbIdx];var s=S[it.k]||{name:it.k,ll:[0,0]};var p=it.p;
  $('#lb-img').src='photos/'+p.id+'_full.jpg';$('#lb-img').alt=p.title;
  $('#lb-n').textContent=nameOf(it.k)+' · '+(it.i+1)+'/'+P[it.k].length;
  var cam=p.lat!=null?'Pozícia fotografa: '+p.lat.toFixed(5)+', '+p.lon.toFixed(5)+(S[it.k]?' ('+fm(dist([p.lat,p.lon],s.ll))+' od bodu)':'')+' · <a target="_blank" rel="noopener" href="'+gm([p.lat,p.lon])+'">v Mapách</a>':'Pozícia fotografa nie je v Commons uvedená.';
  $('#lb-cp').innerHTML='„'+esc(p.title)+'“ · '+esc(p.artist)+' · <a href="'+esc(p.licurl)+'" target="_blank" rel="noopener">'+esc(p.lic)+'</a> · <a href="'+esc(p.page)+'" target="_blank" rel="noopener">Wikimedia Commons</a><br>'+cam}
var lbIdx=0;
function openLb(k,i){lbIdx=lbList.findIndex(function(x){return x.k===k&&x.i===i});if(lbIdx<0)return;$('#lb').classList.add('on');document.body.style.overflow='hidden';lbShow()}
window.openLb=openLb;
function closeLb(){$('#lb').classList.remove('on');document.body.style.overflow=''}
function step(d){var it=lbList[lbIdx];var idxs=lbList.map(function(x,n){return x.k===it.k?n:-1}).filter(function(n){return n>=0});var pos=idxs.indexOf(lbIdx);lbIdx=idxs[(pos+d+idxs.length)%idxs.length];lbShow()}
document.addEventListener('click',function(e){var t=e.target;if(t.matches&&t.matches('img[data-lb]')&&!t.closest('.leaflet-popup')){var a=t.getAttribute('data-lb').split(':');openLb(a[0],+a[1])}});
$('#lb-x').onclick=closeLb;$('#lb-p').onclick=function(){step(-1)};$('#lb-nx').onclick=function(){step(1)};
document.addEventListener('keydown',function(e){if(!$('#lb').classList.contains('on'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
var tx=0;$('#lb-img').addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});$('#lb-img').addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)step(d>0?-1:1)});
$('#lb-m').onclick=function(){var it=lbList[lbIdx];closeLb();if(S[it.k])showSpot(it.k);else toMap()};
// Kawaguchiko galéria (úvod)
$('#kawa').innerHTML=(P.kawa||[]).map(function(p,i){return '<figure style="margin:0"><img loading="lazy" src="photos/'+p.id+'_t.jpg" alt="Jazero Kawaguchi" data-lb="kawa:'+i+'"></figure>'}).join('');
$('#gotg').innerHTML=(P.gotemba||[]).map(function(p,i){return '<figure style="margin:0"><img loading="lazy" src="photos/'+p.id+'_t.jpg" alt="Gotemba Premium Outlets" data-lb="gotemba:'+i+'"></figure>'}).join('');
window.__map=map;
})();
