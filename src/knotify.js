!function (e, t) {
  try {
    'object' == typeof module && module.exports ? module.exports = t()  : e.knotify = t()
  } catch (e) {
    console.log('Isomorphic compatibility is not supported at this time')
  }
}(this, function (e) {
  'complete' === document.readyState ? n()  : window.addEventListener('DOMContentLoaded', n),
  knotify = {
    create: () =>{
      console.error(['DOM has not finished loading.',
      '\tInvoke the create method when DOMs readyState is complete'].join('\n'))
    }
  };
  let t = 0;
  function n() {
    const e = document.createElement('div');
    e.id = 'knotify-container',
    document.body.appendChild(e),
    knotify.create = (e=>{
      const n = document.createElement('div');
      n.id = ++t,
      n.id = 'toast-' + n.id,
      e.animationIn ? n.className = 'knotify animated ' + e.animationIn : n.className = 'knotify animated fadeInUp';
      const a = document.createElement('div');
      if (a.className = 'vh', n.appendChild(a), e.image) {
        const t = document.createElement('span');
        t.className = 'b4cimg',
        a.appendChild(t);
        const n = document.createElement('img');
        if (n.src = e.image, n.className = 'bAimg', t.appendChild(n), e.important) {
          const e = document.createElement('i');
          e.className = 'important',
          t.appendChild(e)
        }
      }
      if (e.icon) {
        const t = document.createElement('span');
        t.className = 'b4cicon',
        a.appendChild(t);
        const n = document.createElement('i');
        if (n.className = e.icon, t.appendChild(n), e.important) {
          const e = document.createElement('i');
          e.className = 'important',
          t.appendChild(e)
        }
      }
      const o = document.createElement('span');
      o.className = 'bAq',
      e.text ? o.innerHTML = e.text : o.innerHTML = 'Hello!',
      a.appendChild(o);
      const i = document.createElement('span');
      if (i.className = 'bAo', a.appendChild(i), 'function' == typeof e.callbackOk) {
        const t = document.createElement('span');
        e.buttonOk ? t.innerHTML = e.buttonOk : t.innerHTML = 'OK',
        t.className = 'a8k',
        i.appendChild(t),
        t.addEventListener('click', t=>{
          t.stopPropagation(),
          e.callbackOk.call(d())
        })
      }
      if ('function' == typeof e.callbackCancel) {
        const t = document.createElement('span');
        e.buttonCancel ? t.innerHTML = e.buttonCancel : t.innerHTML = 'No, gracias',
        t.className = 'a8k',
        i.appendChild(t),
        t.addEventListener('click', t=>{
          t.stopPropagation(),
          e.callbackCancel.call(d())
        })
      }
      const c = document.createElement('div');
      c.className = 'bBe',
      a.appendChild(c);
      const s = document.createElement('div');
      s.className = 'bBf',
      c.appendChild(s),
      c.addEventListener('click', e=>{
        e.stopPropagation(),
        d()
      }),
      n.hide = (() =>{
        e.animationIn ? n.classList.remove(e.animationIn)  : n.classList.remove('fadeInUp'),
        e.animationOut ? n.classList.add(e.animationOut)  : n.classList.add('fadeOutDown'),
        window.setTimeout(() =>{
          n.remove()
        }, 2000)
      }),
      e.duration && window.setTimeout(n.hide, e.duration),
      e.rounded && (n.className += ' rounded'),
      e.type ? n.className += ' knotify-' + e.type : n.className += ' knotify-default',
      e.classes && (n.className += ' ' + e.classes);
      const d = () =>{
        e.animationIn ? n.classList.remove(e.animationIn)  : n.classList.remove('fadeInUp'),
        e.animationOut ? n.classList.add(e.animationOut)  : n.classList.add('fadeOutDown'),
        window.setTimeout(function () {
          n.remove()
        }.bind(this), 1000)
      };
      return document.getElementById('knotify-container').appendChild(n),
      n
    })
  }
  return knotify
});
