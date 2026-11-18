'use strict';
const LOCK='<span class="lock"><svg viewBox="0 0 24 24"><path d="M7 10V7a5 5 0 0110 0v3h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2zm2 0h6V7a3 3 0 00-6 0z"/></svg></span>';
const TIMES=['15:00','15:20','15:40','16:00','16:20','16:40','17:00','17:20','17:40'];
const DATES=['2026-11-25','2026-12-02','2026-12-09','2026-12-16'];
const STAFF=[{id:'doc',n:'ドクター',s:'整形外科・スポーツ外来'},{id:'pt',n:'理学療法士',s:'リハビリ・動作'},{id:'nut',n:'管理栄養士',s:'食事・体重'},{id:'pha',n:'薬剤師',s:'薬・ドーピング'}];
const ME={name:'佐藤 美咲',club:'陸上競技部',grade:2};
const WD=['SUN','MON','TUE','WED','THU','FRI','SAT'];
const md=d=>{const [,m,x]=d.split('-');return (+m)+'/'+(+x)};
const wd=d=>WD[new Date(d+'T00:00:00').getDay()];
let seq=0;
const B=(date,time,staff,name,club,grade,secret,status)=>({id:++seq,date,time,staff,name,club,grade,secret:!!secret,status:status||'ok'});
// すべて架空の人物
let bookings=[
 B('2026-11-25','15:00','doc','高橋 蓮','硬式野球部',3),
 B('2026-11-25','15:20','doc','伊藤 大和','ラグビー部',2),
 B('2026-11-25','16:00','doc','中村 陽菜','女子バレーボール部',1),
 B('2026-11-25','16:20','doc','小林 結衣','陸上競技部',3,true),
 B('2026-11-25','17:00','doc','渡辺 颯','柔道部',4),
 B('2026-11-25','15:00','pt','山本 葵','陸上競技部',1),
 B('2026-11-25','15:40','pt',ME.name,ME.club,ME.grade),
 B('2026-11-25','16:20','pt','加藤 湊','硬式野球部',2),
 B('2026-11-25','16:40','pt','吉田 凛','水泳部',2),
 B('2026-11-25','17:20','pt','松本 悠真','ラグビー部',3,false,'changed'),
 B('2026-11-25','15:20','nut','井上 さくら','女子バレーボール部',2,true),
 B('2026-11-25','16:00','nut','木村 陸','柔道部',1),
 B('2026-11-25','17:00','nut','林 美月','水泳部',2,false,'cancelled'),
 B('2026-11-25','15:40','pha','清水 樹','水泳部',4),
 B('2026-12-02','15:00','doc','高橋 蓮','硬式野球部',3),
 B('2026-12-02','15:20','doc','森 拓海','ラグビー部',1),
 B('2026-12-02','15:40','doc','池田 心春','水泳部',3),
 B('2026-12-02','16:00','doc','橋本 蒼','柔道部',2),
 B('2026-12-02','16:20','doc','山口 楓','女子バレーボール部',2),
 B('2026-12-02','16:40','doc','石川 朝陽','硬式野球部',1),
 B('2026-12-02','17:00','doc','前田 莉子','陸上競技部',4),
 B('2026-12-02','17:20','doc','藤田 湊斗','ラグビー部',2),
 B('2026-12-02','16:00','pt','山本 葵','陸上競技部',1),
 B('2026-12-09','15:20','pt','岡田 陽向','水泳部',1),
];
const active=b=>b.status!=='cancelled';
const taken=(date,time,staff,exceptId)=>bookings.some(b=>b.date===date&&b.time===time&&b.staff===staff&&active(b)&&b.id!==exceptId);
const staffName=id=>STAFF.find(s=>s.id===id).n;
const $=(s,r)=>(r||document).querySelector(s);
const $$=(s,r)=>[...(r||document).querySelectorAll(s)];

/* ── navigation ── */
const sel={staff:'doc',date:DATES[0],time:null,kind:'normal',edit:null};
function go(name){
  $$('#phone .scr').forEach(s=>s.classList.toggle('on',s.dataset.scr===name));
  $('#tabbar').classList.toggle('hide',['login','confirm','done'].includes(name));
  $$('#tabbar button').forEach(b=>b.classList.toggle('on',b.dataset.go===name));
  if(name==='home')renderHome();
  if(name==='book')renderBook();
  if(name==='confirm')renderConfirm();
  if(name==='mine')renderMine();
  $('#phone .scr.on').scrollTop=0;
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');
  if(g){ if(g.dataset.go==='book'&&!g.dataset.keep){sel.time=null;sel.edit=null;}
    if(g.dataset.rec)setRec(g.dataset.rec); go(g.dataset.go); }
});
$('#roles').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b)return;
  $$('#roles button').forEach(x=>x.classList.toggle('on',x===b));
  $$('.view').forEach(v=>v.classList.toggle('on',v.id==='v-'+b.dataset.role));
  renderTeam(); renderCoord(); window.scrollTo(0,0);
});

/* ── student: home ── */
const myNext=()=>bookings.filter(b=>b.name===ME.name&&active(b)).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time))[0];
const kindChip=b=>b.secret?'<span class="chip s">'+LOCK+'シークレット</span>':'<span class="chip n">通常予約</span>';
function renderHome(){
  const n=myNext();
  $('#homeNext').innerHTML=n?
   '<div class="next"><div class="lab">NEXT ／ 次の予約</div><div class="when"><span class="d">'+md(n.date)+'</span><span class="w">'+wd(n.date)+'</span><span class="t">'+n.time+'</span></div>'+
   '<div class="meta">'+staffName(n.staff)+' '+kindChip(n)+'</div>'+
   '<div class="acts"><button data-change="'+n.id+'">日時を変更</button><button data-go="mine">予約を見る</button></div></div>'
   :'<div class="next"><div class="lab">NEXT ／ 次の予約</div><div class="meta" style="margin:8px 0 4px;font-size:15px;color:#fff">予約はありません</div><div class="acts" style="grid-template-columns:1fr"><button data-go="book">空き枠を見る</button></div></div>';
}
/* ── student: book ── */
function renderBook(){
  $('#bookTitle').textContent=sel.edit?'予約の変更':'メディカル予約';
  const ed=sel.edit&&bookings.find(b=>b.id===sel.edit);
  $('#editBanner').innerHTML=ed?'<div class="banner">変更前：'+md(ed.date)+'（水）'+ed.time+' '+staffName(ed.staff)+'。新しい枠を選んでください。</div>':'';
  $('#menu').innerHTML=STAFF.map(s=>'<button data-staff="'+s.id+'" class="'+(sel.staff===s.id?'on':'')+'"><b>'+s.n+'</b><small>'+s.s+'</small></button>').join('');
  $('#dates').innerHTML=DATES.map(d=>{
    const free=TIMES.filter(t=>!taken(d,t,sel.staff,sel.edit)).length;
    const a=free===0?['no','満席']:free<=2?['few','残り'+free]:['ok','空きあり'];
    return '<button data-date="'+d+'" class="'+(sel.date===d?'on':'')+'"><span class="m">'+md(d)+'</span><span class="w">水曜</span><span class="a '+a[0]+'">'+a[1]+'</span></button>';}).join('');
  $('#slots').innerHTML=TIMES.map(t=>{
    const x=taken(sel.date,t,sel.staff,sel.edit);
    return '<button data-time="'+t+'" '+(x?'disabled ':'')+'class="'+(x?'x':sel.time===t?'on':'')+'"><span class="t">'+t+'</span><span class="s">'+(x?'予約済':'空き')+'</span></button>';}).join('');
  const c=$('#toConfirm'); c.disabled=!sel.time; c.textContent=sel.time?md(sel.date)+'（水）'+sel.time+' で進む':'時間を選んでください';
}
$('#menu').addEventListener('click',e=>{const b=e.target.closest('[data-staff]');if(b){sel.staff=b.dataset.staff;sel.time=null;renderBook();}});
$('#dates').addEventListener('click',e=>{const b=e.target.closest('[data-date]');if(b){sel.date=b.dataset.date;sel.time=null;renderBook();}});
$('#slots').addEventListener('click',e=>{const b=e.target.closest('[data-time]');if(b&&!b.disabled){sel.time=b.dataset.time;renderBook();}});
$('#toConfirm').addEventListener('click',()=>{if(sel.time)go('confirm');});
function setKind(k){sel.kind=k;$$('#kind button').forEach(b=>b.classList.toggle('on',b.dataset.kind===k));}
function renderConfirm(){
  $('#sum').innerHTML='<dt>日時</dt><dd><span class="num">'+md(sel.date)+'</span>（水）<span class="num">'+sel.time+'</span></dd><dt>相談先</dt><dd>'+staffName(sel.staff)+'</dd><dt>場所</dt><dd>湘南キャンパス 健康推進室</dd>';
  setKind(sel.kind);
  $('#doBook').textContent=sel.edit?'この内容に変更する':'予約を確定する';
}
$('#kind').addEventListener('click',e=>{const b=e.target.closest('[data-kind]');if(b)setKind(b.dataset.kind);});
$('#doBook').addEventListener('click',()=>{
  if(taken(sel.date,sel.time,sel.staff,sel.edit))throw new Error('この枠はすでに埋まっています');
  let b;
  if(sel.edit){b=bookings.find(x=>x.id===sel.edit);Object.assign(b,{date:sel.date,time:sel.time,staff:sel.staff,secret:sel.kind==='secret',status:'changed'});}
  else{b=B(sel.date,sel.time,sel.staff,ME.name,ME.club,ME.grade,sel.kind==='secret');bookings.push(b);}
  $('#doneTitle').textContent=sel.edit?'予約を変更しました':'予約が完了しました';
  $('#doneWhen').textContent=md(b.date)+' WED '+b.time;
  $('#doneMeta').innerHTML='<span class="chip g">'+staffName(b.staff)+'</span>'+kindChip(b);
  sel.edit=null;sel.time=null;sel.kind='normal';go('done');
});
/* ── student: mine ── */
function renderMine(){
  const list=bookings.filter(b=>b.name===ME.name).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
  $('#mineList').innerHTML=(list.length?list.map(b=>
   '<div class="bk '+(active(b)?'':'cx')+'"><div class="hd"><span class="d">'+md(b.date)+'</span><span class="w">'+wd(b.date)+'</span><span class="t">'+b.time+'</span></div>'+
   '<div class="bd">'+staffName(b.staff)+' '+(active(b)?kindChip(b):'<span class="chip c">キャンセル済</span>')+'</div>'+
   (active(b)?'<div class="ft"><button data-change="'+b.id+'">日時を変更</button><button data-cancel="'+b.id+'">キャンセル</button></div>':'')+'</div>').join('')
   :'<div class="empty">予約はありません</div>')+'<button class="btn" data-go="book">新しく予約する</button>'+
   '<p class="fine">変更とキャンセルは前日の17時まで、この画面からできます。</p>';
}
document.addEventListener('click',e=>{
  const c=e.target.closest('[data-change]');
  if(c){const b=bookings.find(x=>x.id===+c.dataset.change);sel.edit=b.id;sel.staff=b.staff;sel.date=b.date;sel.time=null;sel.kind=b.secret?'secret':'normal';go('book');return;}
  const x=e.target.closest('[data-cancel]');
  if(x){ if(x.dataset.armed){bookings.find(b=>b.id===+x.dataset.cancel).status='cancelled';renderMine();}
         else{x.dataset.armed='1';x.textContent='取り消しを確定';} }
});

/* ── records: temperature ── */
function synth(){ // 架空データ（オムロンCSVと同じ列構成）
  let s=20261118;const r=()=>(s=(s*1103515245+12345)%2147483648)/2147483648;
  const rows=[];const start=new Date('2026-10-01T00:00:00');
  for(let i=0;i<48;i++){ if(r()<0.16)continue;
    const cd=(i+9)%29; const base=cd<15?36.22:36.58; const ramp=(cd>=15&&cd<17)?-0.15:0;
    const d=new Date(start);d.setDate(d.getDate()+i);d.setHours(5+Math.floor(r()*3),Math.floor(r()*60));
    rows.push({d,t:Math.round((base+ramp+(r()-0.5)*0.26)*100)/100,m:r()<0.25?'実測':'予測',k:'MC-652LC'});}
  return rows;
}
function parseCsv(text){
  const lines=text.replace(/^﻿/,'').split(/\r?\n/).filter(l=>l.trim());
  if(!lines.length)throw new Error('CSVが空です');
  const h=lines[0].split(',');
  const iD=h.indexOf('測定日'),iT=h.findIndex(x=>x.startsWith('基礎体温')),iM=h.indexOf('測定方式'),iK=h.indexOf('機種');
  if(iD<0||iT<0)throw new Error('列「測定日」「基礎体温(℃)」が見つかりません。オムロンの書き出し形式か確認してください。');
  return lines.slice(1).map((l,n)=>{const c=l.split(',');
    const m=/^(\d{4})\/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})/.exec(c[iD]||'');const t=parseFloat(c[iT]);
    if(!m||!isFinite(t)||t<34||t>42)throw new Error((n+2)+'行目を読めません：'+l.slice(0,40));
    return {d:new Date(+m[1],m[2]-1,+m[3],+m[4],+m[5]),t,m:iM<0?'':c[iM],k:iK<0?'':c[iK]};});
}
function renderTemp(rows,periods){
  if(!rows.length)throw new Error('測定値が1件もありません');
  rows.sort((a,b)=>a.d-b.d);
  const day=x=>Math.round((new Date(x.getFullYear(),x.getMonth(),x.getDate())-d0)/864e5);
  const d0=new Date(rows[0].d.getFullYear(),rows[0].d.getMonth(),rows[0].d.getDate());
  const span=day(rows[rows.length-1].d)+1, ts=rows.map(r=>r.t);
  const avg=ts.reduce((a,b)=>a+b,0)/ts.length, lo=Math.min(...ts), hi=Math.max(...ts);
  const y0=Math.floor((lo-0.15)*5)/5, y1=Math.ceil((hi+0.15)*5)/5;
  const W=340,H=190,L=34,R=8,T=8,Bm=24;
  const X=i=>L+(span<=1?0:(W-L-R)*i/(span-1)), Y=t=>T+(H-T-Bm)*(1-(t-y0)/(y1-y0));
  let g='';
  for(let v=y0;v<=y1+1e-9;v+=0.2){g+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'" stroke="#ebe7dc"/><text x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end" font-size="10" fill="#8792a2" font-family="Barlow Condensed">'+v.toFixed(1)+'</text>';}
  const fmt=x=>(x.getMonth()+1)+'/'+x.getDate();
  const ticks=Math.min(5,span);for(let k=0;k<ticks;k++){const i=Math.round((span-1)*k/Math.max(1,ticks-1));const dd=new Date(d0);dd.setDate(dd.getDate()+i);
    g+='<text x="'+X(i)+'" y="'+(H-6)+'" text-anchor="'+(k===0?'start':k===ticks-1?'end':'middle')+'" font-size="10" fill="#8792a2" font-family="Barlow Condensed">'+fmt(dd)+'</text>';}
  (periods||[]).forEach(p=>{g+='<rect x="'+X(p[0])+'" y="'+(H-Bm-5)+'" width="'+(X(p[1])-X(p[0]))+'" height="5" rx="2" fill="#e2562b"/>';});
  g+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(avg)+'" y2="'+Y(avg)+'" stroke="#004ea2" stroke-dasharray="3 4" opacity=".5"/>';
  let path='',prev=null;rows.forEach(r=>{const i=day(r.d);path+=(prev!==null&&i-prev<=1?'L':'M')+X(i).toFixed(1)+' '+Y(r.t).toFixed(1);prev=i;});
  g+='<path d="'+path+'" fill="none" stroke="#004ea2" stroke-width="1.8" stroke-linejoin="round"/>';
  rows.forEach(r=>{g+='<circle cx="'+X(day(r.d)).toFixed(1)+'" cy="'+Y(r.t).toFixed(1)+'" r="3" fill="'+(r.m==='予測'?'#fff':'#004ea2')+'" stroke="#004ea2" stroke-width="1.6"/>';});
  $('#tempChart').innerHTML='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="基礎体温の推移">'+g+'</svg>';
  $('#tempStat').innerHTML='<div><b>'+rows.length+'<small>/'+span+'</small></b><small>記録日数</small></div><div><b>'+avg.toFixed(2)+'</b><small>平均 ℃</small></div><div><b>'+lo.toFixed(2)+'</b><small>最低 ℃</small></div><div><b>'+hi.toFixed(2)+'</b><small>最高 ℃</small></div>';
  $('#tempRange').textContent=fmt(rows[0].d)+' – '+fmt(rows[rows.length-1].d)+(rows[0].k?' ／ '+rows[0].k:'');
}
$('#csvIn').addEventListener('change',async e=>{
  const f=e.target.files[0]; if(!f)return; const err=$('#csvErr'); err.style.display='none';
  try{renderTemp(parseCsv(await f.text()),[]);}
  catch(x){err.textContent='取り込めませんでした：'+x.message;err.style.display='block';}
  e.target.value='';
});
function setRec(k){$$('#recSeg button').forEach(b=>b.classList.toggle('on',b.dataset.rec===k));$('#recTemp').style.display=k==='temp'?'grid':'none';$('#recCond').style.display=k==='cond'?'grid':'none';
  $$('#jump button').forEach(b=>b.classList.remove('on'));}
$('#recSeg').addEventListener('click',e=>{const b=e.target.closest('button');if(b)setRec(b.dataset.rec);});
$$('[data-lv]').forEach(l=>l.addEventListener('click',e=>{const b=e.target.closest('button');if(b)$$('button',l).forEach(x=>x.classList.toggle('on',x===b));}));
(function condBars(){const v=[2,2,3,4,3,2,1,2,3,3,4,5,3,2];const W=320,H=70,bw=W/v.length;
  $('#condBars').innerHTML='<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;display:block">'+v.map((x,i)=>'<rect x="'+(i*bw+3)+'" y="'+(H-x*13)+'" width="'+(bw-6)+'" height="'+(x*13)+'" rx="3" fill="'+(x>=4?'#e2562b':'#004ea2')+'" opacity="'+(i===v.length-1?1:.55)+'"/>').join('')+'</svg>';})();

/* ── team ── */
let tDate=DATES[0];
function renderTeam(){
  $('#tDates').innerHTML=DATES.map(d=>'<button data-date="'+d+'" class="'+(tDate===d?'on':'')+'"><span class="m">'+md(d)+'</span><span class="w">水曜</span></button>').join('');
  const list=bookings.filter(b=>b.club===ME.club&&!b.secret&&b.date===tDate).sort((a,b)=>a.time.localeCompare(b.time));
  const st={ok:'<span class="chip g">予約済</span>',changed:'<span class="chip w">変更あり</span>',cancelled:'<span class="chip c">キャンセル</span>'};
  $('#tList').innerHTML=list.length?list.map(b=>'<div class="trow '+(active(b)?'':'cx')+'"><span class="t">'+b.time+'</span><span><b>'+b.name+'</b><small>'+b.grade+'年</small></span>'+st[b.status]+'</div>').join(''):'<div class="empty">この日の予約はありません</div>';
}
$('#tDates').addEventListener('click',e=>{const b=e.target.closest('[data-date]');if(b){tDate=b.dataset.date;renderTeam();}});

/* ── coordinator ── */
let aDate=DATES[0],aSel=null;
function renderCoord(){
  $('#aDay').innerHTML=md(aDate).replace('/','.')+'<small>WED</small>';
  $('#aDates').innerHTML=DATES.map(d=>'<button data-date="'+d+'" class="'+(aDate===d?'on':'')+'">'+md(d)+'</button>').join('');
  const day=bookings.filter(b=>b.date===aDate), act=day.filter(active), total=TIMES.length*STAFF.length;
  $('#kpis').innerHTML='<div class="kpi"><b>'+act.length+'<small> / '+total+'枠</small></b><span>予約</span></div>'+
    '<div class="kpi sec"><b>'+act.filter(b=>b.secret).length+'</b><span>'+LOCK+' うちシークレット</span></div>'+
    '<div class="kpi"><b>'+day.filter(b=>b.status==='changed').length+'</b><span>変更あり（未確認）</span></div>'+
    '<div class="kpi"><b>'+day.filter(b=>b.status==='cancelled').length+'</b><span>キャンセル</span></div>';
  $('#grid').innerHTML='<thead><tr><th>時間</th>'+STAFF.map(s=>'<th>'+s.n+'<small>'+s.s+'</small></th>').join('')+'</tr></thead><tbody>'+
    TIMES.map(t=>'<tr><td>'+t+'</td>'+STAFF.map(s=>{const b=act.find(x=>x.time===t&&x.staff===s.id);
      return '<td>'+(b?'<button class="cell '+(b.secret?'s ':'')+(b.status==='changed'?'chg ':'')+(aSel===b.id?'sel':'')+'" data-b="'+b.id+'"><b>'+(b.secret?LOCK+' ':'')+b.name+'</b><small>'+b.club+'・'+b.grade+'年</small></button>':'<button class="cell free">＋</button>')+'</td>';}).join('')+'</tr>').join('')+'</tbody>';
  const b=bookings.find(x=>x.id===aSel&&x.date===aDate&&active(x));
  $('#detail').innerHTML=b?
    '<div class="lab">BOOKING</div><h3>'+b.name+'</h3><dl class="sum"><dt>所属</dt><dd>'+b.club+'・'+b.grade+'年</dd><dt>日時</dt><dd><span class="num">'+md(b.date)+'</span>（水）<span class="num">'+b.time+'</span></dd><dt>相談先</dt><dd>'+staffName(b.staff)+'</dd><dt>種別</dt><dd>'+kindChip(b)+'</dd></dl>'+
    '<div class="share '+(b.secret?'n':'y')+'">'+(b.secret?LOCK+' チームには共有されていません':'チームに日時と状況を共有中')+'</div>'+
    '<div class="acts"><button class="btn sm ghost">日時を変更</button><button class="btn sm warn">キャンセル</button></div>'
    :'<div class="lab">BOOKING</div><p style="color:var(--ink2);font-size:14px">枠を選ぶと、予約の内容とチームへの共有状況が表示されます。</p>';
}
$('#aDates').addEventListener('click',e=>{const b=e.target.closest('[data-date]');if(b){aDate=b.dataset.date;aSel=null;renderCoord();}});
$('#grid').addEventListener('click',e=>{const b=e.target.closest('[data-b]');if(b){aSel=+b.dataset.b;renderCoord();}});
$('#anav').addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;$$('#anav button').forEach(x=>x.classList.toggle('on',x===b));
  $('#a-res').style.display=b.dataset.a==='res'?'block':'none';$('#a-ord').style.display=b.dataset.a==='ord'?'block':'none';});
$('#csvOut').addEventListener('click',()=>{
  const rows=[['日付','時間','相談先','氏名','所属','学年','種別','状況']].concat(bookings.filter(b=>b.date===aDate).map(b=>[b.date,b.time,staffName(b.staff),b.name,b.club,b.grade,b.secret?'シークレット':'通常',b.status]));
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['﻿'+rows.map(r=>r.join(',')).join('\r\n')],{type:'text/csv'}));a.download='予約一覧_'+aDate+'_架空データ.csv';a.click();
});
(function orders(){
  const P=['スポーツドリンク 粉末（箱）','ゼリー飲料（箱）','栄養補助食品（箱）'];
  const R=[['陸上競技部',12,8,10],['硬式野球部',20,6,14],['ラグビー部',18,12,16],['女子バレーボール部',8,6,6],['柔道部',6,4,8],['水泳部',10,4,6]];
  const sum=i=>R.reduce((a,r)=>a+r[i],0);
  $('#otbl').innerHTML='<thead><tr><th>クラブ</th>'+P.map(p=>'<th>'+p+'</th>').join('')+'<th>確認</th></tr></thead><tbody>'+
   R.map((r,i)=>'<tr><td>'+r[0]+'</td><td class="num">'+r[1]+'</td><td class="num">'+r[2]+'</td><td class="num">'+r[3]+'</td><td>'+(i<4?'<span class="chip g">確認済</span>':'<span class="chip w">確認待ち</span>')+'</td></tr>').join('')+
   '</tbody><tfoot><tr><td>合計</td><td class="num">'+sum(1)+'</td><td class="num">'+sum(2)+'</td><td class="num">'+sum(3)+'</td><td></td></tr></tfoot>';
})();

/* 文節の切れ目だけで折る: ひらがな→漢字・カタカナ・英数の境目に <wbr> を入れる */
const PH='.nlist p,.nlist strong,.lead,.anote,.fine,.kind small,.banner,.flow div,.news span,.detail p';
const WJ=String.fromCharCode(8288);
function phrase(){
  $$(PH).forEach(el=>{ if(el.dataset.ph)return; el.dataset.ph='1';
    const tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nodes=[];
    for(let n=tw.nextNode();n;n=tw.nextNode())nodes.push(n);
    nodes.forEach(n=>{
      const t=n.data.replace(/([）」])(?=[ぁ-ん])/g,(m,a)=>a+WJ);
      const raw=t.split(/(?<=[ぁ-ん])(?=[一-龠々ァ-ヶA-Za-z0-9「（])/),parts=[];
      raw.forEach(p=>{const prev=parts[parts.length-1];
        if(prev!==undefined&&(/[おご]$/.test(prev)||/[一-龠々][ぁ-ん]$/.test(prev)&&!/[のをにとがはでもへや]$/.test(prev)))parts[parts.length-1]=prev+p; else parts.push(p);});
      const f=document.createDocumentFragment();
      parts.forEach((p,i)=>{if(i)f.appendChild(document.createElement('wbr'));f.appendChild(document.createTextNode(p));});
      n.replaceWith(f);});
  });
}
new MutationObserver(phrase).observe(document.body,{childList:true,subtree:true});
renderTemp(synth(),[[2,6],[31,35]]);
renderTeam();renderCoord();phrase();
// 試作の確認用: ?role=team|coord  &scr=home|book|confirm|mine|rec  &rec=cond
(function(){const q=new URLSearchParams(location.search);
  if(q.get('role')){const b=$('#roles [data-role="'+q.get('role')+'"]');if(!b)throw new Error('unknown role');b.click();}
  if(q.get('scr')){if(q.get('scr')==='confirm'){sel.time='16:40';}if(q.get('rec'))setRec(q.get('rec'));go(q.get('scr'));}
  if(q.get('pick')){aSel=+q.get('pick');renderCoord();}
  if(q.get('a')){$('#anav [data-a="'+q.get('a')+'"]').click();}
})();
