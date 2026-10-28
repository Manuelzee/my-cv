import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import { animate, stagger } from 'animejs';
import './styles.css';

const NAV = ['Home', 'About me', 'Jobs', 'Projects'];

const worlds = {
  frontend: {
    number: '01', label: 'BUILD', title: 'Frontend Development', accent: '#91ff58',
    intro: 'Interfaces engineered for speed, clarity and measurable action.',
    skills: ['React.js', 'Vue.js', 'JavaScript', 'HTML5 / CSS3', 'Bootstrap', 'Tailwind', 'WordPress'],
    roles: [
      ['DigitalVent', 'Frontend Developer', 'Sep 2022 — Mar 2023', 'Built responsive React experiences, streamlined maintenance and introduced version-control automation that reduced file errors.'],
      ['Ispecs Digital Services', 'Frontend Developer', 'Dec 2020 — Sep 2021', 'Delivered membership, event and legal platforms; integrated third-party services and mentored a six-person team.'],
      ['One Big Pie Ltd', 'Frontend Developer · Contract', 'Sep 2020 — Dec 2020', 'Turned five product concepts into wireframes and responsive interfaces, including data-rich React components.'],
      ['Central Council of Ibadan Indigenes', 'Web Administrator', 'Sep 2018 — Dec 2018', 'Managed web content and supported digital campaigns and an efficiency-focused scoring tool.'],
      ['Miracle Technologies', 'Intern Frontend Developer', 'Feb 2018 — Sep 2018', 'Led an SEO-focused redesign, built a WordPress blog and dashboards, and coordinated delivery across disciplines.']
    ]
  },
  qa: {
    number: '10', label: 'VERIFY', title: 'QA & AI Evaluation', accent: '#42f5ff',
    intro: 'Reliability tested at the edges — from user flows to adversarial AI behavior.',
    skills: ['Manual QA', 'Selenium', 'Appium', 'Pytest', 'Postman', 'AI Red Teaming', 'BrowseComp', 'Jira'],
    roles: [
      ['SYNCLI', 'Manual Tester · Remote', 'Jan 2026 — Feb 2026', 'Designed and executed test plans, documented defects and verified fixes across the software delivery lifecycle.'],
      ['Cleaques', 'Manual & Automation Tester · Remote', 'Sep 2022 — Oct 2024', 'Protected core e-commerce journeys with repeatable automation, exploratory testing and cross-functional defect management.'],
      ['Ajek', 'Unit & Automation Tester · Contract', 'Mar 2022 — Jan 2023', 'Ran functional, regression, integration and unit tests while maintaining reproducible defect records.'],
      ['ByteGuard', 'Software Tester · Internship', 'Aug 2021 — Dec 2021', 'Tested browser and platform compatibility and supported automated test frameworks before release.'],
      ['AI Evaluation Lab', 'Evaluator & Red Teamer', 'Ongoing practice', 'Designs adversarial prompts, evaluates browsing agents, triangulates sources and documents reproducible reliability failures.']
    ]
  },
  growth: {
    number: '11', label: 'GROW', title: 'Digital Marketing', accent: '#ffb347',
    intro: 'Acquisition systems where creative instinct is accountable to data.',
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'GA4', 'GoHighLevel', 'HubSpot', 'Email', 'Conversion Optimization'],
    roles: [
      ['Prosumate', 'Chief Marketing Officer', 'Sep 2024 — Feb 2026', 'Led acquisition, conversion funnels, analytics, creator partnerships and AI-assisted SaaS growth strategy.'],
      ['Independent / Upwork', 'Upwork Specialist', 'Mar 2020 — Present', 'Owns positioning, personalized proposals, ICP targeting and pipeline conversion across software and AI services.'],
      ['Namenayou', 'Digital Marketer', 'Feb 2024 — Mar 2024', 'Aligned product, creative, sales and marketing around a consistent content voice and community experience.'],
      ['Omiola Construction Company', 'Social Media Marketer', 'Mar 2022 — Jun 2023', 'Built content systems and a Facebook lead campaign reported at a 30% conversion rate.'],
      ['Nigeria Updates', 'SEO Specialist', 'Dec 2021 — Jan 2022', 'Applied research and on-page SEO initiatives associated with 35% organic traffic growth.'],
      ['Lighthouse Logistics', 'Digital Marketing Specialist', 'Jun 2020 — Aug 2020', 'Optimized sponsored campaigns using performance analysis, reporting a 40% return on investment.']
    ]
  }
};

function MatrixSpace({ warp }) {
  const mount = useRef(null);
  useEffect(() => {
    const node = mount.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020906, 0.055);
    const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
    camera.position.z = 8;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setSize(innerWidth, innerHeight);
    node.appendChild(renderer.domElement);
    const count = 1500;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - .5) * 24;
      pos[i * 3 + 1] = (Math.random() - .5) * 15;
      pos[i * 3 + 2] = Math.random() * -35;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const points = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x51ff73, size: .035, transparent: true, opacity: .62 }));
    scene.add(points);
    const rings = [];
    for (let z = -28; z < 5; z += 3) {
      const ring = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(10, 6, .02)), new THREE.LineBasicMaterial({ color: 0x0b5d2a, transparent: true, opacity: .18 }));
      ring.position.z = z; scene.add(ring); rings.push(ring);
    }
    let id;
    const draw = () => {
      const speed = warp.current ? .34 : .035;
      points.rotation.z += .00025;
      for (const r of rings) { r.position.z += speed; if (r.position.z > 7) r.position.z = -28; }
      renderer.render(scene, camera); id = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); };
    addEventListener('resize', resize);
    return () => { cancelAnimationFrame(id); removeEventListener('resize', resize); renderer.dispose(); node.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mount} className="matrix-space" aria-hidden="true" />;
}

function BinaryPortrait() {
  const canvas = useRef(null);
  useEffect(() => {
    const cv = canvas.current, ctx = cv.getContext('2d');
    const img = new Image(); img.src = '/emmanuel.jpg';
    let raf, revealed = 0;
    img.onload = () => {
      const paint = () => {
        const rect = cv.getBoundingClientRect(), dpr = Math.min(devicePixelRatio, 2);
        cv.width = rect.width * dpr; cv.height = rect.height * dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
        const w = rect.width, h = rect.height, cell = w < 500 ? 7 : 8;
        const scale = Math.max(w / img.width, h / img.height);
        const sw = w / scale, sh = h / scale, sx = (img.width - sw)/2, sy = (img.height-sh)/2;
        const sample = document.createElement('canvas'); sample.width = Math.ceil(w/cell); sample.height = Math.ceil(h/cell);
        sample.getContext('2d').drawImage(img,sx,sy,sw,sh,0,0,sample.width,sample.height);
        const pixels = sample.getContext('2d').getImageData(0,0,sample.width,sample.height).data;
        ctx.clearRect(0,0,w,h); ctx.font = `700 ${cell}px monospace`; ctx.textAlign='center';
        let index = 0;
        for(let y=0;y<sample.height;y++) for(let x=0;x<sample.width;x++) {
          const i=index*4, lum=(pixels[i]+pixels[i+1]+pixels[i+2])/3;
          if(index < revealed && pixels[i+3] > 20) { ctx.fillStyle=`rgba(${Math.min(170,pixels[i]+35)},${Math.min(255,pixels[i+1]+70)},${Math.min(190,pixels[i+2]+35)},${.18+lum/340})`; ctx.fillText((x+y)%2?'1':'0',x*cell+cell/2,y*cell+cell); }
          index++;
        }
        if(revealed < sample.width*sample.height) { revealed += 170; raf=requestAnimationFrame(paint); }
      };
      paint();
    };
    return () => cancelAnimationFrame(raf);
  }, []);
  return <div className="portrait-frame"><canvas ref={canvas} aria-label="Binary reconstruction of Emmanuel Kolawole" /><span className="portrait-code">SUBJECT_001 // EMMANUEL</span></div>;
}

function Scramble({ text }) {
  const [shown, setShown] = useState(text);
  useEffect(() => {
    const chars='01/<>_[]'; let frame=0; const max=text.length*2;
    const id=setInterval(()=>{ setShown(text.split('').map((c,i)=>c===' '?' ':i<frame/2?c:chars[Math.floor(Math.random()*chars.length)]).join('')); if(frame++>max)clearInterval(id); },34);
    return ()=>clearInterval(id);
  },[text]);
  return <>{shown}</>;
}

function Home({ enter }) {
  return <section className="screen home-screen">
    <div className="hero-copy">
      <p className="eyebrow">EMMANUEL KOLAWOLE // MULTIDISCIPLINARY OPERATOR</p>
      <h1><span>Welcome to my</span><br/>world of tech</h1>
      <p className="hero-role">as a <strong>Growth Hacker</strong><br/><small>(Combining Marketing with Development)</small></p>
      <p className="hero-summary">I build the experience, test the system, and grow the audience. One operator across the full digital loop.</p>
      <button className="enter-btn" onClick={()=>enter('About me')}><span>ENTER THE SYSTEM</span><i>↗</i></button>
    </div>
    <BinaryPortrait />
    <div className="coordinates">07.3775° N<br/>03.9470° E</div>
  </section>
}

function About() {
  return <section className="screen content-screen about-screen">
    <header className="section-head"><span>01</span><div><p>ORIGIN / OPERATING SYSTEM</p><h2><Scramble text="Three disciplines. One growth engine." /></h2></div></header>
    <div className="about-grid">
      <div className="statement"><p>I’m Emmanuel, a multidisciplinary technologist in Nigeria. My work lives where <em>product, quality and acquisition</em> overlap.</p><p>A Statistics background sharpened my instinct for evidence. Frontend engineering lets me shape experiences. QA makes them resilient. Marketing connects them to the people they are built for.</p></div>
      <div className="signal-card"><span>CURRENT SIGNAL</span><strong>BUILD → VERIFY → GROW</strong><p>Every interface is a hypothesis. Every test is evidence. Every campaign is a feedback loop.</p></div>
    </div>
    <div className="pillars">
      {[['01','MAKE','Frontend systems that turn intent into interaction.'],['10','PROVE','Testing that exposes risk before users do.'],['11','SCALE','Growth systems that compound what works.']].map(x=><article key={x[1]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}
    </div>
  </section>
}

function Jobs() {
  const [track,setTrack]=useState('frontend'); const w=worlds[track];
  return <section className="screen content-screen jobs-screen" style={{'--accent':w.accent}}>
    <header className="section-head"><span>10</span><div><p>CAREER MULTIVERSE</p><h2><Scramble text="Choose a professional world." /></h2></div></header>
    <div className="world-tabs">{Object.entries(worlds).map(([k,v])=><button key={k} onClick={()=>setTrack(k)} className={track===k?'active':''}><b>{v.number}</b><span>{v.label}</span><small>{v.title}</small></button>)}</div>
    <div className="world-console" key={track}>
      <aside><p>WORLD_{w.number}</p><h3>{w.title}</h3><p>{w.intro}</p><div className="skill-list">{w.skills.map(s=><span key={s}>{s}</span>)}</div></aside>
      <div className="timeline">{w.roles.map((r,i)=><article key={r[0]} style={{'--i':i}}><div className="timeline-node">{String(i+1).padStart(2,'0')}</div><div><p>{r[2]}</p><h4>{r[1]}</h4><strong>{r[0]}</strong><span>{r[3]}</span></div></article>)}</div>
    </div>
  </section>
}

const projects=[
  ['01','ANALYTICS INTERFACE','React data visualization','Interactive components that fetch, parse and translate analytical data into useful visual signals.',['REACT','JAVASCRIPT','DATA UI']],
  ['10','PLATFORM SYSTEMS','Membership, event & legal tools','User-facing platform solutions with integrated third-party services and automated internal workflows.',['WEB APPS','INTEGRATIONS','UX']],
  ['11','QUALITY AUTOMATION LAB','Repeatable release confidence','Test architecture spanning browser automation, API validation, adversarial AI evaluation and defect reproduction.',['SELENIUM','PYTEST','POSTMAN']],
  ['100','GROWTH FUNNEL SYSTEMS','Acquisition to conversion','Landing pages, paid acquisition, CRM journeys and analytics designed as one measurable feedback loop.',['SEO','PAID MEDIA','CRO']],
  ['101','SEO-FIRST REDESIGN','Organic discovery by design','A web redesign integrating technical and content SEO, reported to increase daily organic traffic by 30%.',['WORDPRESS','SEO','CONTENT']]
];
function Projects(){return <section className="screen content-screen projects-screen"><header className="section-head"><span>11</span><div><p>SELECTED SYSTEMS / CASE FILES</p><h2><Scramble text="Work that connects the stack." /></h2></div></header><div className="project-grid">{projects.map((p,i)=><article key={p[0]}><div className="project-top"><b>{p[0]}</b><span>CASE_{String(i+1).padStart(2,'0')}</span></div><h3>{p[1]}</h3><h4>{p[2]}</h4><p>{p[3]}</p><div>{p[4].map(t=><small key={t}>{t}</small>)}</div></article>)}</div><div className="contact-strip"><p>HAVE A SYSTEM TO BUILD, TEST OR GROW?</p><a href="mailto:ekolawole57@gmail.com">INITIALIZE A CONVERSATION <span>↗</span></a></div></section>}

function App(){
  const [page,setPage]=useState('Home'),[menu,setMenu]=useState(false); const warp=useRef(false);
  const go=(next)=>{ if(next===page){setMenu(false);return;} warp.current=true; setMenu(false); animate('.screen',{opacity:[1,0],scale:[1,.94],duration:260,ease:'inQuad'}).then(()=>{setPage(next); requestAnimationFrame(()=>{animate('.screen',{opacity:[0,1],scale:[1.05,1],duration:650,ease:'outExpo'}); animate('.section-head, .world-tabs, .project-grid article',{translateY:[25,0],opacity:[0,1],delay:stagger(55),duration:600});}); setTimeout(()=>warp.current=false,500);}); };
  const Screen={Home:<Home enter={go}/>, 'About me':<About/>, Jobs:<Jobs/>, Projects:<Projects/>}[page];
  return <main><MatrixSpace warp={warp}/><div className="grain"/><nav><a className="logo" onClick={()=>go('Home')}><span>EK</span><i>_</i></a><div className="desktop-nav">{NAV.map((n,i)=><button key={n} className={page===n?'active':''} onClick={()=>go(n)}><b>0{i+1}</b>{n}</button>)}</div><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Open menu">{menu?'CLOSE':'MENU'} <span>{menu?'×':'+'}</span></button></nav>{menu&&<div className="menu-overlay">{NAV.map((n,i)=><button key={n} onClick={()=>go(n)}><span>0{i+1}</span>{n}</button>)}</div>}<div className="page-shell">{Screen}</div><footer><span>SYSTEM ONLINE</span><span>{new Date().getFullYear()} // EMMANUEL KOLAWOLE</span><a href="mailto:ekolawole57@gmail.com">CONTACT ↗</a></footer></main>
}

createRoot(document.getElementById('root')).render(<App/>);
