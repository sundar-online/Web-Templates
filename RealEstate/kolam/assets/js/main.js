(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
function toast(m){var t=$('#toast');if(!t)return;t.textContent=m;t.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(function(){t.style.display='none'},2800)}
var bg=$('.burger'),nav=$('.nav');if(bg)bg.addEventListener('click',function(){bg.setAttribute('aria-expanded',nav.classList.toggle('open'))});
$$('.heart').forEach(function(h){h.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();h.classList.toggle('on')})});
/* listing filters */
var ff=$('#filters');
if(ff){var cards=$$('[data-prop]'),grid=$('#plist'),none=$('#none'),cnt=$('#count'),status='';
 var qs=new URLSearchParams(location.search);['loc','type','budget','beds'].forEach(function(k){if(qs.get(k)&&$('#f'+k))$('#f'+k).value=qs.get(k)});
 var run=function(){var loc=$('#floc').value,ty=$('#ftype').value,bd=$('#fbeds').value,bu=$('#fbudget').value,n=0;
  cards.forEach(function(c){var d=c.dataset,ok=(!status||d.status===status)&&(!loc||d.city===loc)&&(!ty||d.type===ty)&&(!bd||(bd==='4'?+d.beds>=4:+d.beds===+bd));
   if(ok&&bu){var p=bu.split(':');ok=d.status===(p[0]==='rent'?'For Rent':'For Sale')&&+d.price<=+p[1]}
   c.style.display=ok?'':'none';if(ok)n++});
  none.style.display=n?'none':'block';cnt.textContent=n+(n===1?' home':' homes')+' found'};
 var sort=function(){var v=$('#sort').value,a=cards.slice().sort(function(x,y){return v==='lo'?x.dataset.price-y.dataset.price:v==='hi'?y.dataset.price-x.dataset.price:x.dataset.idx-y.dataset.idx});a.forEach(function(c){grid.appendChild(c)})};
 $$('.seg button').forEach(function(b){b.addEventListener('click',function(){$$('.seg button').forEach(function(x){x.classList.toggle('on',x===b)});status=b.dataset.s;run()})});
 ff.addEventListener('input',run);ff.addEventListener('submit',function(e){e.preventDefault();run()});$('#sort').addEventListener('change',sort);run()}
/* gallery */
var gm=$('#gmain');
if(gm){var th=$$('.mosaic [data-s]');th.forEach(function(t){t.addEventListener('click',function(){gm.className='img g0 '+t.dataset.s;th.forEach(function(x){x.classList.toggle('on',x===t)})})})}
/* blog */
var bs=$('#bsearch');
if(bs){var ps=$$('[data-post]'),cat='All',bn=$('#bnone'),br=function(){var q=bs.value.toLowerCase(),n=0;ps.forEach(function(p){var ok=(cat==='All'||p.dataset.cat===cat)&&(!q||p.dataset.title.toLowerCase().indexOf(q)>-1);p.style.display=ok?'':'none';if(ok)n++});bn.style.display=n?'none':'block'};
 bs.addEventListener('input',br);$$('button.chip').forEach(function(c){c.addEventListener('click',function(){$$('button.chip').forEach(function(x){x.classList.remove('on')});c.classList.add('on');cat=c.textContent;br()})})}
/* forms */
$$('form[data-validate]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var bad=false;
 $$('[required]',f).forEach(function(i){var er=i.parentNode.querySelector('.err'),m=!i.value.trim()?'This field is required.':(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value)?'Enter a valid email address.':'');if(er)er.textContent=m;if(m)bad=true});
 if(bad)return;f.reset();toast(f.dataset.ok||'Thanks. We will be in touch.')})});
/* admin */
$$('.side [data-tab]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();$$('.side [data-tab]').forEach(function(x){x.classList.toggle('on',x===a)});$$('.panel').forEach(function(p){p.classList.toggle('on',p.id===a.dataset.tab)})})});
$$('[data-demo]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();toast('Preview only. Connect a backend to save changes.')})});
})();
