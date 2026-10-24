(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
function toast(m){var t=$('#toast');if(!t)return;t.textContent=m;t.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(function(){t.style.display='none'},2800)}
var bg=$('.burger'),nav=$('.nav');if(bg)bg.addEventListener('click',function(){bg.setAttribute('aria-expanded',nav.classList.toggle('open'))});
/* hero tabs */
$$('.tabs button').forEach(function(b){b.addEventListener('click',function(){$$('.tabs button').forEach(function(x){x.classList.toggle('on',x===b)});var h=$('#stab');if(h)h.value=b.dataset.v})});
/* hearts */
$$('.heart').forEach(function(h){h.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();h.classList.toggle('on')})});
/* video */
$$('.play').forEach(function(p){p.addEventListener('click',function(){toast('Add your video link here.')})});
/* listing filters */
var ff=$('#filters');
if(ff){var cards=$$('[data-prop]'),grid=$('#plist'),none=$('#none'),cnt=$('#count'),pr=$('#fprice'),pv=$('#pv');
 var fmt=function(n){return '₹'+(+n).toLocaleString('en-IN')};
 var qs=new URLSearchParams(location.search);if(qs.get('loc')&&$('#floc'))$('#floc').value=qs.get('loc');
 if(qs.get('type')){$$('input[name=type]').forEach(function(c){c.checked=c.value===qs.get('type')})}
 var run=function(){var types=$$('input[name=type]:checked').map(function(c){return c.value}),loc=$('#floc').value,bd=+$('#fbeds').value,mp=+pr.value,n=0;pv.textContent='₹0 - '+fmt(mp);
  cards.forEach(function(c){var d=c.dataset,ok=(!types.length||types.indexOf(d.type)>-1)&&(!loc||d.city===loc)&&(!bd||(bd===4?+d.beds>=4:+d.beds===bd))&&(+d.price<=mp);c.style.display=ok?'':'none';if(ok)n++});
  none.style.display=n?'none':'block';cnt.textContent='Showing 1 - '+n+' of '+n+' properties'};
 var sort=function(){var v=$('#sort').value,a=cards.slice().sort(function(x,y){return v==='lo'?x.dataset.price-y.dataset.price:v==='hi'?y.dataset.price-x.dataset.price:x.dataset.idx-y.dataset.idx});a.forEach(function(c){grid.appendChild(c)})};
 ff.addEventListener('input',run);ff.addEventListener('submit',function(e){e.preventDefault();run()});$('#sort').addEventListener('change',sort);$('#reset').addEventListener('click',function(){setTimeout(run,0)});run()}
/* gallery */
var gm=$('#gmain');
if(gm){var th=$$('.thumbs [data-s]'),cur=0,show=function(i){cur=(i+th.length)%th.length;gm.className='img main '+th[cur].dataset.s;th.forEach(function(t,k){t.classList.toggle('on',k===cur)})};
 th.forEach(function(t,k){t.addEventListener('click',function(){show(k)})});$('#prev').addEventListener('click',function(){show(cur-1)});$('#next').addEventListener('click',function(){show(cur+1)})}
/* blog */
var bs=$('#bsearch');
if(bs){var ps=$$('[data-post]'),cat='All',bn=$('#bnone'),br=function(){var q=bs.value.toLowerCase(),n=0;ps.forEach(function(p){var ok=(cat==='All'||p.dataset.cat===cat)&&(!q||p.dataset.title.toLowerCase().indexOf(q)>-1);p.style.display=ok?'':'none';if(ok)n++});bn.style.display=n?'none':'block'};
 bs.addEventListener('input',br);$$('.chip').forEach(function(c){c.addEventListener('click',function(){$$('.chip').forEach(function(x){x.classList.remove('on')});c.classList.add('on');cat=c.textContent;br()})})}
/* forms */
$$('form[data-validate]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var bad=false;
 $$('[required]',f).forEach(function(i){var er=i.parentNode.querySelector('.err'),m=!i.value.trim()?'This field is required.':(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value)?'Enter a valid email address.':'');if(er)er.textContent=m;if(m)bad=true});
 if(bad)return;f.reset();toast(f.dataset.ok||'Thanks. We will be in touch.')})});
/* admin */
$$('.side [data-tab]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();$$('.side [data-tab]').forEach(function(x){x.classList.toggle('on',x===a)});$$('.panel').forEach(function(p){p.classList.toggle('on',p.id===a.dataset.tab)})})});
$$('[data-demo]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();toast('Preview only. Connect a backend to save changes.')})});
})();
