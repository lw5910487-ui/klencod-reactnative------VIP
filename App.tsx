<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#080d20">
<title>إدارة المخازن | VIP</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23070707'/%3E%3Cpath d='M14 24l18-9 18 9v4H14z' fill='%23f2c94c'/%3E%3Cpath d='M18 30h28v18H18z' fill='%23111111' stroke='%23f2c94c' stroke-width='2'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Amiri:wght@700&display=swap" rel="stylesheet">
<style>
/* ═══════════ إدارة المخازن | VIP — الهوية البصرية ═══════════ */
:root{
  --black:#080d20;
  --black-2:#0e1536;
  --black-3:#16204e;
  --gold:#f2c94c;
  --gold-2:#ffe391;
  --gold-dim:rgba(242,201,76,.38);
  --royal:#5b7cfa;
  --royal-2:#93a8ff;
  --silver:#dde4f7;
  --silver-2:#97a3cc;
  --danger:#ff6b7d;
  --ok:#2ee6a8;
  --glass:rgba(116,146,255,.08);
  --glass-border:rgba(242,201,76,.30);
  --radius:16px;
  --shadow:0 20px 60px rgba(2,6,25,.6);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:'Cairo',system-ui,sans-serif;
  background:
    radial-gradient(1100px 620px at 85% -10%, rgba(91,124,250,.17), transparent 60%),
    radial-gradient(900px 520px at 8% 108%, rgba(242,201,76,.10), transparent 60%),
    var(--black);
  color:var(--silver);
  -webkit-font-smoothing:antialiased;
  min-height:100dvh;
  overflow-x:hidden;
}
h1,h2,h3{font-weight:700}
button{cursor:pointer;font-family:inherit}
input,select,textarea{font-family:inherit}
:focus-visible{outline:2px solid var(--gold);outline-offset:2px}
.hidden{display:none!important}
.screen{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;z-index:100}

/* ── توهجات الخلفية ── */
.bg-glow{position:absolute;border-radius:50%;filter:blur(120px);opacity:.5;pointer-events:none}
.bg-glow.gold{width:520px;height:520px;background:radial-gradient(circle,rgba(242,201,76,.28),transparent 65%);top:-120px;right:-120px;animation:float 9s ease-in-out infinite}
.bg-glow.silver{width:460px;height:460px;background:radial-gradient(circle,rgba(122,152,255,.22),transparent 65%);bottom:-100px;left:-100px;animation:float 11s ease-in-out infinite reverse}
.bg-glow.big{width:700px;height:700px}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(28px)}}

/* ── الزجاجية ── */
.glass{
  background:var(--glass);
  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);
  border:1px solid var(--glass-border);
  border-radius:var(--radius);
}

/* ── شاشة الدخول ── */
.login-screen{background:radial-gradient(ellipse at 50% 30%,#18245c,var(--black) 70%)}
.login-card{
  width:min(400px,92vw);
  padding:48px 36px;
  text-align:center;
  box-shadow:var(--shadow);
  animation:rise .7s cubic-bezier(.2,.9,.3,1.2);
  position:relative;z-index:2;
}
@keyframes rise{from{opacity:0;transform:translateY(26px) scale(.96)}to{opacity:1;transform:none}}
.logo-mark{font-size:52px;filter:drop-shadow(0 0 18px rgba(242,201,76,.55));margin-bottom:8px}
.logo-mark.small{font-size:28px;margin:0}
.logo-mark.pulse{animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.09);filter:drop-shadow(0 0 30px rgba(242,201,76,.8))}}
.system-name{
  font-size:30px;font-weight:900;
  background:linear-gradient(120deg,var(--gold-2),var(--gold) 55%,#b3891f);
  -webkit-background-clip:text;background-clip:text;color:transparent;
  margin-bottom:6px;
}
.vip-badge{
  display:inline-block;font-size:12px;letter-spacing:3px;color:var(--black);
  background:linear-gradient(120deg,var(--gold-2),var(--gold));
  padding:4px 18px;border-radius:999px;font-weight:700;margin-bottom:26px;
}
.password-wrap{position:relative;margin-bottom:18px}
#login-password{
  width:100%;padding:14px 18px;font-size:18px;text-align:center;letter-spacing:6px;
  background:rgba(255,255,255,.06);border:1px solid var(--glass-border);
  border-radius:12px;color:var(--gold-2);transition:.25s;
}
#login-password:focus{border-color:var(--gold);box-shadow:0 0 0 4px rgba(242,201,76,.15)}
.btn-gold{
  width:100%;padding:14px;font-size:17px;font-weight:700;color:#181203;
  background:linear-gradient(120deg,var(--gold-2),var(--gold) 60%,#caa12f);
  border:none;border-radius:12px;transition:.25s;
  box-shadow:0 8px 24px rgba(242,201,76,.28);
}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(242,201,76,.42)}
.btn-gold:active{transform:translateY(0)}
.login-error{color:var(--danger);min-height:22px;margin-top:12px;font-size:14px;transition:.3s}
.shake{animation:shake .45s}
@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-9px)}40%,80%{transform:translateX(9px)}}
.login-footer{position:absolute;bottom:22px;font-size:12px;color:var(--silver-2);z-index:2}

/* ── شاشة التشغيل ── */
.loading-screen{background:radial-gradient(ellipse at 50% 40%,#141f52,var(--black) 70%)}
.loader-inner{text-align:center;position:relative;z-index:2;animation:rise .6s ease-out}
.loader-text{color:var(--silver);font-size:18px;margin:14px 0 26px;letter-spacing:1px}
.loader-bar{width:min(360px,80vw);height:6px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;margin:0 auto}
.loader-fill{height:100%;width:0;background:linear-gradient(90deg,var(--gold-2),var(--gold));border-radius:99px;box-shadow:0 0 14px rgba(242,201,76,.7)}
.loader-percent{margin-top:14px;font-size:22px;font-weight:700;color:var(--gold)}

/* ═══════════ الهيكل الرئيسي ═══════════ */
#app{display:flex;min-height:100dvh}
.sidebar{
  width:260px;flex-shrink:0;background:linear-gradient(180deg,#131d4e,var(--black-2) 45%,#0a1029);
  border-left:1px solid rgba(242,201,76,.14);
  display:flex;flex-direction:column;position:sticky;top:0;height:100dvh;z-index:40;
}
.sidebar-head{display:flex;align-items:center;gap:12px;padding:22px 20px;border-bottom:1px solid rgba(255,255,255,.06)}
.sb-title{font-weight:900;color:var(--gold-2);font-size:17px}
.sb-sub{font-size:11px;color:var(--silver-2);letter-spacing:2px}
.nav{flex:1;overflow-y:auto;padding:14px 10px}
.nav-item{
  display:flex;align-items:center;gap:12px;width:100%;
  padding:11px 14px;margin-bottom:4px;border:none;border-radius:11px;
  background:transparent;color:var(--silver);font-size:15px;font-weight:600;
  transition:.2s;text-align:right;
}
.nav-item:hover{background:rgba(242,201,76,.09);color:var(--gold-2)}
.nav-item.active{background:linear-gradient(120deg,rgba(242,201,76,.2),rgba(242,201,76,.06));color:var(--gold-2);box-shadow:inset 0 0 0 1px rgba(242,201,76,.3)}
.nav-ico{width:22px;text-align:center}
.sidebar-foot{padding:16px;border-top:1px solid rgba(255,255,255,.06)}
.current-user{font-size:13px;color:var(--silver-2);margin-bottom:10px}
.current-user b{color:var(--gold)}
.btn-ghost{
  width:100%;padding:9px;background:rgba(255,255,255,.05);color:var(--silver);
  border:1px solid rgba(255,255,255,.12);border-radius:10px;transition:.2s;font-size:14px;
}
.btn-ghost:hover{border-color:var(--gold);color:var(--gold-2)}

.main-area{flex:1;display:flex;flex-direction:column;min-width:0}
.topbar{
  display:flex;align-items:center;gap:14px;padding:14px 22px;margin:14px 18px 0;
  border-radius:14px;position:sticky;top:14px;z-index:30;
}
.topbar h2{font-size:19px;color:var(--gold-2);flex:1}
.topbar-side{display:flex;align-items:center;gap:12px}
#topbar-clock{font-size:13px;color:var(--silver-2);font-variant-numeric:tabular-nums}
.icon-btn{
  position:relative;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);
  color:var(--silver);width:40px;height:40px;border-radius:11px;font-size:17px;transition:.2s;
}
.icon-btn:hover{border-color:var(--gold);color:var(--gold-2)}
.bell-count{
  position:absolute;top:-5px;left:-5px;background:var(--danger);color:#fff;
  font-size:11px;font-weight:700;min-width:19px;height:19px;border-radius:99px;
  display:flex;align-items:center;justify-content:center;padding:0 4px;
}
#menu-toggle{display:none}
.pages{padding:18px;flex:1;animation:pageIn .3s ease-out}
@keyframes pageIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.app-footer{padding:16px;text-align:center;font-size:12px;color:var(--silver-2);border-top:1px solid rgba(255,255,255,.05)}

/* ── لوحة التنبيهات ── */
.alerts-panel{
  position:fixed;top:0;left:0;height:100dvh;width:min(360px,92vw);z-index:80;
  background:var(--black-2);border-right:1px solid var(--glass-border);
  box-shadow:var(--shadow);animation:slideIn .3s ease-out;
}
@keyframes slideIn{from{transform:translateX(-100%)}to{transform:none}}
.panel-head{display:flex;align-items:center;justify-content:space-between;padding:18px;border-bottom:1px solid rgba(255,255,255,.07)}
.panel-head h3{color:var(--gold-2);font-size:16px}
.alerts-list{padding:14px;overflow-y:auto;height:calc(100% - 70px)}
.alert-item{
  padding:13px 15px;border-radius:12px;margin-bottom:10px;font-size:14px;
  border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);
  border-right:3px solid var(--gold);
}
.alert-item.warn{border-right-color:var(--danger)}
.alert-item{position:relative}
.alert-del{position:absolute;top:8px;left:8px;background:rgba(255,107,125,.14);border:1px solid rgba(255,107,125,.35);color:#f0a0a0;width:22px;height:22px;border-radius:7px;font-size:12px;line-height:1;display:flex;align-items:center;justify-content:center;transition:.2s;padding:0}
.alert-del:hover{background:rgba(255,107,125,.3);color:#fff}
.alert-item small{display:block;color:var(--silver-2);margin-top:4px}
.empty-msg{text-align:center;color:var(--silver-2);padding:40px 10px;font-size:14px}

/* ── البطاقات والإحصائيات ── */
.cards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;margin-bottom:20px}
.stat-card{
  padding:20px;border-radius:var(--radius);position:relative;overflow:hidden;
  transition:.25s;
}
.stat-card:hover{transform:translateY(-3px);border-color:var(--gold-dim)}
.stat-card::after{
  content:'';position:absolute;top:-40px;left:-40px;width:110px;height:110px;
  border-radius:50%;background:radial-gradient(circle,rgba(242,201,76,.14),transparent 70%);
}
.stat-label{font-size:13px;color:var(--silver-2);margin-bottom:8px}
.stat-value{font-size:26px;font-weight:900;color:var(--gold-2);font-variant-numeric:tabular-nums}
.stat-value.danger{color:var(--danger)}
.stat-value.ok{color:var(--ok)}
.stat-icon{position:absolute;top:16px;left:16px;font-size:22px;opacity:.85}

.section-card{padding:22px;border-radius:var(--radius);margin-bottom:20px}
.section-card h3{color:var(--gold-2);margin-bottom:16px;font-size:17px;display:flex;align-items:center;gap:8px}

.two-col{display:grid;grid-template-columns:1fr 1fr;gap:20px}
@media(max-width:1000px){.two-col{grid-template-columns:1fr}}

/* ── الجداول ── */
.table-wrap{overflow-x:auto;border-radius:12px;border:1px solid rgba(255,255,255,.08)}
table{width:100%;border-collapse:collapse;font-size:14px;min-width:600px}
thead th{
  background:rgba(242,201,76,.09);color:var(--gold-2);font-weight:700;
  padding:12px 14px;text-align:right;white-space:nowrap;
}
tbody td{padding:11px 14px;border-top:1px solid rgba(255,255,255,.06);color:var(--silver)}
tbody tr:hover{background:rgba(242,201,76,.05)}
.num{font-variant-numeric:tabular-nums}
.badge{display:inline-block;padding:3px 12px;border-radius:99px;font-size:12px;font-weight:700}
.badge.ok{background:rgba(46,230,168,.14);color:var(--ok)}
.badge.warn{background:rgba(255,107,125,.14);color:var(--danger)}
.badge.gold{background:rgba(242,201,76,.16);color:var(--gold-2)}
.badge.silver{background:rgba(122,152,255,.14);color:var(--silver)}

/* ── الأزرار ── */
.btn{
  display:inline-flex;align-items:center;gap:7px;padding:9px 18px;border-radius:11px;
  border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.05);color:var(--silver);
  font-size:14px;font-weight:600;transition:.2s;
}
.btn:hover{border-color:var(--gold);color:var(--gold-2)}
.btn-gold-sm{
  padding:9px 20px;border-radius:11px;border:none;font-weight:700;font-size:14px;
  background:linear-gradient(120deg,var(--gold-2),var(--gold));color:#181203;transition:.2s;
}
.btn-gold-sm:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(242,201,76,.3)}
.btn-danger{background:rgba(255,107,125,.12);border-color:rgba(255,107,125,.4);color:#f0a0a0}
.btn-danger:hover{border-color:var(--danger);color:#fff;background:rgba(255,107,125,.22)}
.btn-sm{padding:5px 12px;font-size:12.5px;border-radius:8px}
.btn-row{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;align-items:center}

/* ── النماذج ── */
.form-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-bottom:16px}
.field label{display:block;font-size:13px;color:var(--silver-2);margin-bottom:6px}
.field input,.field select,.field textarea{
  width:100%;padding:10px 13px;background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.13);border-radius:10px;color:var(--silver);
  font-size:14px;transition:.2s;
}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(242,201,76,.12);outline:none}
.field select option{background:var(--black-2);color:var(--silver)}

/* ── البحث ── */
.search-bar{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px}
.search-bar input,.search-bar select{
  padding:10px 14px;background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.13);border-radius:10px;color:var(--silver);font-size:14px;
}
.search-bar input{flex:1;min-width:200px}

/* ── المودال ── */
.modal-backdrop{
  position:fixed;inset:0;background:rgba(0,0,0,.72);backdrop-filter:blur(6px);
  display:flex;align-items:center;justify-content:center;z-index:90;padding:16px;
  animation:fadeIn .2s;
}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.modal{
  width:min(620px,94vw);max-height:88dvh;overflow-y:auto;padding:28px;
  box-shadow:var(--shadow);animation:rise .3s ease-out;
}
.modal h3{color:var(--gold-2);margin-bottom:18px;font-size:18px}
.modal-actions{display:flex;gap:10px;justify-content:flex-start;margin-top:20px}

/* ── التوست ── */
.toast{
  position:fixed;bottom:26px;right:50%;transform:translateX(50%);z-index:120;
  background:var(--black-3);border:1px solid var(--gold-dim);color:var(--gold-2);
  padding:13px 26px;border-radius:12px;font-weight:600;box-shadow:var(--shadow);
  animation:rise .3s ease-out;
}

/* ── الرسوم البيانية ── */
.chart-box{display:flex;align-items:flex-end;gap:6px;height:160px;padding:14px 6px 0}
.chart-col{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0}
.chart-bar{
  width:100%;max-width:34px;border-radius:6px 6px 2px 2px;
  background:linear-gradient(180deg,var(--gold-2),var(--gold));
  transition:height .6s cubic-bezier(.2,.8,.3,1);
  min-height:3px;
}
.chart-bar.dim{background:linear-gradient(180deg,#93a8ff,#5f79f2)}
.chart-lbl{font-size:10.5px;color:var(--silver-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}

/* ── فاتورة الطباعة ── */
.invoice-print{background:#fff;color:#111;padding:28px;border-radius:8px;font-size:13px}
.invoice-print h2{color:#8a6d1a;font-size:20px;margin-bottom:4px}
.invoice-print table{min-width:0;font-size:12.5px}
.invoice-print thead th{background:#f5edd8;color:#6b5410;padding:8px}
.invoice-print tbody td{color:#222;padding:7px 8px;border-top:1px solid #eee}

/* ── حول النظام ── */
.about-hero{text-align:center;padding:30px 10px 10px}
.about-hero .logo-mark{font-size:64px}
.dev-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:26px 0}
.dev-card{padding:26px 20px;text-align:center;border-radius:var(--radius);transition:.25s}
.dev-card:hover{transform:translateY(-4px);border-color:var(--gold-dim)}
.dev-card .avatar{width:64px;height:64px;margin:0 auto 12px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;background:linear-gradient(135deg,rgba(242,201,76,.25),rgba(242,201,76,.05));border:1px solid var(--gold-dim)}
.dev-card h4{color:var(--gold-2);margin-bottom:5px}
.dev-card p{font-size:13.5px;color:var(--silver)}
.thanks-line{
  text-align:center;padding:22px;font-size:16px;color:var(--gold-2);
  border-radius:var(--radius);border:1px dashed var(--gold-dim);
}

/* ── الجوال ── */
@media(max-width:860px){
  .sidebar{position:fixed;right:0;transform:translateX(100%);transition:.3s;box-shadow:var(--shadow)}
  .sidebar.open{transform:none}
  #menu-toggle{display:inline-flex}
  .cards-grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}
  .stat-value{font-size:20px}
  .topbar{margin:10px 10px 0;padding:10px 14px}
  .pages{padding:12px}
  .system-name{font-size:25px}
}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

@media print{
  body *{visibility:hidden}
  #print-area,#print-area *{visibility:visible}
  #print-area{position:fixed;inset:0}
}

</style>
</head>
<body>

<!-- ══════════ شاشة الدخول ══════════ -->
<section id="login-screen" class="screen login-screen">
  <div class="bg-glow gold"></div>
  <div class="bg-glow silver"></div>
  <div class="login-card glass">
    <div class="logo-mark">👑</div>
    <h1 class="system-name">إدارة المخازن</h1>
    <div class="vip-badge">VIP · Enterprise</div>
    <div class="password-wrap">
      <input type="password" id="login-password" placeholder="أدخل كلمة المرور" autocomplete="off" inputmode="numeric">
    </div>
    <button id="login-btn" class="btn-gold">دخول النظام</button>
    <p id="login-error" class="login-error"></p>
  </div>
  <p style="margin-top:18px;font-size:13.5px;color:var(--silver-2);z-index:2;text-align:center;line-height:1.9">نسيت كلمة السر؟ تواصل مع <b style="color:var(--gold-2)">علي باناعمه</b> لمعرفتها 👑</p>
  <p class="login-footer">إدارة المخازن | VIP — نظام إدارة مخزون متكامل</p>
</section>

<!-- ══════════ شاشة التشغيل ══════════ -->
<section id="loading-screen" class="screen loading-screen hidden">
  <div class="bg-glow silver big"></div>
  <div class="loader-inner">
    <div class="logo-mark pulse">👑</div>
    <h1 class="system-name">إدارة المخازن</h1>
    <p class="loader-text">جاري تشغيل نظام المخزون...</p>
    <div class="loader-bar"><div id="loader-fill" class="loader-fill"></div></div>
    <div id="loader-percent" class="loader-percent">0%</div>
  </div>
</section>

<!-- ══════════ الهيكل الرئيسي ══════════ -->
<div id="app" class="hidden">
  <aside id="sidebar" class="sidebar">
    <div class="sidebar-head">
      <div class="logo-mark small">👑</div>
      <div>
        <div class="sb-title">إدارة المخازن</div>
        <div class="sb-sub">VIP Enterprise</div>
      </div>
    </div>
    <nav id="nav" class="nav"></nav>
    <div class="sidebar-foot">
      <div id="current-user" class="current-user"></div>
      <button id="logout-btn" class="btn-ghost">تسجيل الخروج</button>
    </div>
  </aside>

  <div class="main-area">
    <header class="topbar glass">
      <button id="menu-toggle" class="icon-btn" aria-label="القائمة">☰</button>
      <h2 id="page-title">لوحة التحكم</h2>
      <div class="topbar-side">
        <span id="topbar-clock"></span>
        <button id="bell-btn" class="icon-btn" aria-label="التنبيهات">
          🔔<span id="bell-count" class="bell-count hidden">0</span>
        </button>
      </div>
    </header>
    <main id="pages" class="pages"></main>
    <footer class="app-footer">✨ تم تطوير التطبيق بواسطة علي باناعمه</footer>
  </div>

  <!-- لوحة التنبيهات الجانبية -->
  <div id="alerts-panel" class="alerts-panel hidden">
    <div class="panel-head"><h3>🔔 التنبيهات الذكية</h3><div style="display:flex;gap:8px"><button id="alerts-clear" class="btn btn-danger btn-sm">مسح الكل</button><button id="alerts-close" class="icon-btn">✕</button></div></div>
    <div id="alerts-list" class="alerts-list"></div>
  </div>
</div>

<!-- نافذة عامة -->
<div id="modal-backdrop" class="modal-backdrop hidden">
  <div id="modal" class="modal glass" role="dialog" aria-modal="true"></div>
</div>

<div id="toast" class="toast hidden"></div>

<input type="file" id="import-file" accept=".json" hidden>
<script>
/* ═══════════ إدارة المخازن | VIP — النواة ═══════════ */
const LS_KEY = 'inv_vip_state_v1';

/* ── الحالة الافتراضية ── */
const defaultState = () => ({
  settings: {
    orgName: 'مؤسستي التجارية', currency: 'ر.س', taxRate: 15,
    invoicePrefix: 'INV', purchasePrefix: 'PUR', lowStockDays: 30,
  },
  users: [
    { id: 1, name: 'مدير النظام', username: 'admin', password: '357', role: 'admin' },
    { id: 2, name: 'عضو', username: 'member', password: '789', role: 'viewer' },
  ],
  session: null,
  products: [], warehouses: [], customers: [], suppliers: [],
  purchases: [], sales: [], transfers: [], logs: [], loginLogs: [],
  seq: { sale: 1, purchase: 1 },
  dismissedAlerts: [],
});

let S = load();

function load() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) { const s = JSON.parse(raw); return { ...defaultState(), ...s, settings: { ...defaultState().settings, ...(s.settings || {}) } }; }
  } catch (e) { console.error(e); }
  return defaultState();
}
function save() { localStorage.setItem(LS_KEY, JSON.stringify(S)); }
save();

/* ── فرض كلمات المرور الخاصة: المدير 357 / الأعضاء 789 ── */
(function enforcePasswords() {
  const admin = S.users.find(u => u.role === 'admin');
  if (admin) admin.password = '357'; else S.users.unshift({ id: 1, name: 'مدير النظام', username: 'admin', password: '357', role: 'admin' });
  if (!S.users.some(u => u.role === 'viewer' && u.password === '789'))
    S.users.push({ id: Date.now(), name: 'عضو', username: 'member', password: '789', role: 'viewer' });
  save();
})();

/* ── أدوات مساعدة ── */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const fmt = n => (Number(n) || 0).toLocaleString('ar-EG', { maximumFractionDigits: 2 }) + ' ' + S.settings.currency;
const today = () => new Date().toISOString().slice(0, 10);
const nowStr = () => new Date().toLocaleString('ar-EG');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function log(action, details = '') {
  S.logs.unshift({ id: uid(), time: nowStr(), user: S.session?.name || '—', action, details });
  if (S.logs.length > 500) S.logs.length = 500;
  save();
}

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg; t.classList.remove('hidden');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.add('hidden'), 2600);
}

function openModal(html) {
  $('#modal').innerHTML = html;
  $('#modal-backdrop').classList.remove('hidden');
}
function closeModal() { $('#modal-backdrop').classList.add('hidden'); $('#modal').innerHTML = ''; }
$('#modal-backdrop').addEventListener('click', e => { if (e.target.id === 'modal-backdrop') closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function confirmModal(title, text, onYes) {
  openModal(`<h3>${title}</h3><p style="line-height:1.9">${text}</p>
    <div class="modal-actions">
      <button class="btn-danger btn" id="cf-yes">تأكيد</button>
      <button class="btn" id="cf-no">إلغاء</button>
    </div>`);
  $('#cf-yes').onclick = () => { closeModal(); onYes(); };
  $('#cf-no').onclick = closeModal;
}

/* ── المخزون الموزع ── */
function stockOf(pid, wid) { return (S.stock?.[pid]?.[wid]) || 0; }
function ensureStock(pid) { if (!S.stock) S.stock = {}; if (!S.stock[pid]) S.stock[pid] = {}; }
function addStock(pid, wid, qty) { ensureStock(pid); S.stock[pid][wid] = (S.stock[pid][wid] || 0) + qty; }
function totalStock(pid) { return Object.values(S.stock?.[pid] || {}).reduce((a, b) => a + b, 0); }

/* ── الصلاحيات ── */
const ROLES = {
  admin: { label: 'مدير — صلاحيات كاملة', pages: ['dashboard','products','warehouses','purchases','sales','customers','suppliers','reports','users','settings','backup','about'] },
  sales: { label: 'موظف مبيعات', pages: ['dashboard','sales','customers','products','about'] },
  stock: { label: 'موظف مخزون', pages: ['dashboard','products','warehouses','purchases','suppliers','reports','about'] },
  viewer: { label: 'عضو — عرض فقط (بدون تعديل)', pages: ['dashboard','products','warehouses','purchases','sales','customers','suppliers','reports','about'] },
};
const can = page => S.session && ROLES[S.session.role].pages.includes(page);
const isViewer = () => S.session?.role === 'viewer';
function noEdit() { toast('⚠️ حساب عرض فقط — لا تملك صلاحية التعديل'); }

/* ── التنبيهات الذكية ── */
function computeAlerts() {
  const alerts = [];
  const nearExp = S.settings.lowStockDays;
  for (const p of S.products) {
    const t = totalStock(p.id);
    if (t === 0) alerts.push({ type: 'danger', msg: `نفد المنتج «${p.name}» بالكامل من المخزون`, cat: 'نفاد' });
    else if (t <= p.minStock) alerts.push({ type: 'warn', msg: `انخفضت كمية «${p.name}» عن الحد الأدنى (${t} متبقي)`, cat: 'مخزون منخفض' });
    if (p.expiry) {
      const days = Math.ceil((new Date(p.expiry) - new Date()) / 864e5);
      if (days >= 0 && days <= nearExp) alerts.push({ type: 'warn', msg: `اقتراب انتهاء صلاحية «${p.name}» خلال ${days} يوم`, cat: 'صلاحية' });
    }
  }
  for (const c of S.customers) if (c.balance > 0) alerts.push({ type: 'warn', msg: `دين مستحق على العميل «${c.name}» بمبلغ ${fmt(c.balance)}`, cat: 'ديون' });
  for (const s of S.suppliers) if (s.balance > 0) alerts.push({ type: 'warn', msg: `مبلغ مستحق للمورد «${s.name}» بقيمة ${fmt(s.balance)}`, cat: 'مستحقات' });
  return alerts.filter(a => !(S.dismissedAlerts || []).includes(alertKey(a)));
}
function alertKey(a){ return a.cat + '|' + a.msg; }

/* ═══════════ شاشة الدخول ═══════════ */
const loginScreen = $('#login-screen'), loadingScreen = $('#loading-screen'), appEl = $('#app');
const passInput = $('#login-password');

function tryLogin() {
  const val = passInput.value.trim();
  const user = S.users.find(u => u.password === val);
  if (user) {
    S.session = { id: user.id, name: user.name, role: user.role };
    S.loginLogs.unshift({ time: nowStr(), user: user.name, role: user.role });
    save();
    loginScreen.classList.add('hidden');
    startLoading();
  } else {
    $('#login-error').innerHTML = 'كلمة المرور غير صحيحة — تواصل مع علي باناعمه لمعرفة كلمة السر 👑';
    passInput.classList.remove('shake'); void passInput.offsetWidth; passInput.classList.add('shake');
    passInput.value = ''; passInput.focus();
  }
}
$('#login-btn').onclick = tryLogin;
passInput.addEventListener('keydown', e => { if (e.key === 'Enter') tryLogin(); });

function startLoading() {
  loadingScreen.classList.remove('hidden');
  const fill = $('#loader-fill'), pct = $('#loader-percent');
  const start = performance.now(), DUR = 5000;
  function step(t) {
    const p = Math.min(100, ((t - start) / DUR) * 100);
    fill.style.width = p + '%';
    pct.textContent = Math.round(p) + '%';
    if (p < 100) requestAnimationFrame(step);
    else { loadingScreen.classList.add('hidden'); enterApp(); }
  }
  requestAnimationFrame(step);
}

/* ═══════════ الهيكل والتنقل ═══════════ */
const PAGES = [
  { id: 'dashboard', ico: '📊', label: 'لوحة التحكم' },
  { id: 'products', ico: '📦', label: 'المنتجات' },
  { id: 'warehouses', ico: '🏬', label: 'المخازن' },
  { id: 'purchases', ico: '📥', label: 'المشتريات' },
  { id: 'sales', ico: '🛒', label: 'المبيعات' },
  { id: 'customers', ico: '👥', label: 'العملاء' },
  { id: 'suppliers', ico: '🤝', label: 'الموردون' },
  { id: 'reports', ico: '📈', label: 'التقارير' },
  { id: 'users', ico: '👤', label: 'المستخدمون' },
  { id: 'settings', ico: '⚙️', label: 'الإعدادات' },
  { id: 'backup', ico: '💾', label: 'النسخ الاحتياطي' },
  { id: 'about', ico: '👑', label: 'حول النظام' },
];
let currentPage = 'dashboard';

function enterApp() {
  appEl.classList.remove('hidden');
  $('#current-user').innerHTML = `المستخدم: <b>${esc(S.session.name)}</b><br><small>${ROLES[S.session.role].label}</small>`;
  renderNav();
  renderAlertsPanel();
  clock();
  setInterval(clock, 1000);
  go(can('dashboard') ? 'dashboard' : ROLES[S.session.role].pages[0]);
}
function clock() { $('#topbar-clock').textContent = new Date().toLocaleString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }); }

function renderNav() {
  $('#nav').innerHTML = PAGES.filter(p => can(p.id))
    .map(p => `<button class="nav-item ${p.id === currentPage ? 'active' : ''}" data-page="${p.id}"><span class="nav-ico">${p.ico}</span>${p.label}</button>`).join('');
  $$('.nav-item').forEach(b => b.onclick = () => { go(b.dataset.page); $('#sidebar').classList.remove('open'); });
}

function go(page) {
  if (!can(page)) { toast('لا تملك صلاحية الوصول لهذا القسم'); return; }
  currentPage = page;
  $('#page-title').textContent = PAGES.find(p => p.id === page).label;
  renderNav();
  ({ dashboard, products, warehouses, purchases, sales, customers, suppliers, reports, users, settings, backup, about })[page]();
  renderAlertsPanel();
}

$('#logout-btn').onclick = () => {
  S.session = null;
  try { save(); }
  catch (e) {
    try { localStorage.setItem(LS_KEY, JSON.stringify({ ...S, session: null })); }
    catch (e2) { try { localStorage.removeItem(LS_KEY); } catch (e3) {} }
  }
  // إعادة ضبط الواجهة يدويًا بدون الاعتماد الكامل على إعادة التحميل
  appEl.classList.add('hidden');
  loadingScreen.classList.add('hidden');
  $('#alerts-panel').classList.add('hidden');
  passInput.value = '';
  $('#login-error').textContent = '';
  loginScreen.classList.remove('hidden');
  passInput.focus();
};
$('#menu-toggle').onclick = () => $('#sidebar').classList.toggle('open');
$('#bell-btn').onclick = () => $('#alerts-panel').classList.toggle('hidden');
$('#alerts-close').onclick = () => $('#alerts-panel').classList.add('hidden');
$('#alerts-clear').onclick = () => {
  const cur = computeAlerts();
  if (!cur.length) { toast('لا توجد تنبيهات لحذفها'); return; }
  S.dismissedAlerts = [...new Set([...(S.dismissedAlerts || []), ...cur.map(alertKey)])];
  log('مسح جميع التنبيهات', String(cur.length) + ' تنبيه');
  save(); renderAlertsPanel(); toast('تم مسح جميع التنبيهات');
};

function renderAlertsPanel() {
  const alerts = computeAlerts();
  const n = alerts.filter(a => a.type === 'danger').length + alerts.filter(a => a.type === 'warn').length;
  const bc = $('#bell-count');
  bc.textContent = alerts.length; bc.classList.toggle('hidden', alerts.length === 0);
  $('#alerts-list').innerHTML = alerts.length
    ? alerts.map(a => `<div class="alert-item ${a.type === 'danger' ? 'warn' : ''}">${a.msg}<small>التصنيف: ${a.cat}</small><button class="alert-del" title="حذف هذا التنبيه" data-key="${esc(alertKey(a))}">✕</button></div>`).join('')
    : '<div class="empty-msg">لا توجد تنبيهات — كل شيء تحت السيطرة ✨</div>';
  $$('#alerts-list .alert-del').forEach(b => b.onclick = () => {
    S.dismissedAlerts = S.dismissedAlerts || [];
    S.dismissedAlerts.push(b.dataset.key);
    log('حذف تنبيه', b.dataset.key.split('|')[1] || '');
    save(); renderAlertsPanel(); toast('تم حذف التنبيه');
  });
}

/* ═══════════ لوحة التحكم ═══════════ */
function moneyIn(from, to) { // حركة مالية لفترة
  return list => list.filter(x => x.date >= from && x.date <= to);
}
function pageHTML(html) { $('#pages').innerHTML = html; }

function dashboard() {
  const tp = S.products.length;
  const tq = S.products.reduce((a, p) => a + totalStock(p.id), 0);
  const stockValue = S.products.reduce((a, p) => a + totalStock(p.id) * p.buyPrice, 0);
  const salesTotal = S.sales.reduce((a, s) => a + s.total, 0);
  const salesPaid = S.sales.reduce((a, s) => a + s.paid, 0);
  const purchTotal = S.purchases.reduce((a, s) => a + s.total, 0);
  const cogs = S.sales.reduce((a, s) => a + s.items.reduce((x, i) => x + i.qty * i.buyPrice, 0), 0);
  const profit = salesTotal - cogs;
  const low = S.products.filter(p => totalStock(p.id) > 0 && totalStock(p.id) <= p.minStock).length;
  const out = S.products.filter(p => totalStock(p.id) === 0).length;
  const lastOps = [
    ...S.sales.map(s => ({ t: s.time, txt: `🛒 فاتورة بيع ${s.no} بقيمة ${fmt(s.total)}` })),
    ...S.purchases.map(s => ({ t: s.time, txt: `📥 فاتورة شراء ${s.no} بقيمة ${fmt(s.total)}` })),
    ...S.transfers.map(s => ({ t: s.time, txt: `🔄 نقل ${s.qty}× ${s.pName} بين المخازن` })),
  ].sort((a, b) => b.t.localeCompare(a.t)).slice(0, 8);

  // الأكثر مبيعًا
  const sold = {};
  for (const s of S.sales) for (const i of s.items) sold[i.pName] = (sold[i.pName] || 0) + i.qty;
  const top = Object.entries(sold).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // بيانات الرسم اليومي (آخر 7 أيام مبيعات) والشهري (آخر 6 أشهر)
  const daySum = {}, monSum = {};
  for (const s of S.sales) {
    daySum[s.date] = (daySum[s.date] || 0) + s.total;
    const m = s.date.slice(0, 7); monSum[m] = (monSum[m] || 0) + s.total;
  }
  const days = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return d.toISOString().slice(0, 10); });
  const months = [...Array(6)].map((_, i) => { const d = new Date(); d.setMonth(d.getMonth() - (5 - i)); return d.toISOString().slice(0, 7); });

  pageHTML(`
    <div class="cards-grid">
      ${stat('📦', 'إجمالي المنتجات', tp)}
      ${stat('🔢', 'إجمالي الكميات', tq)}
      ${stat('💰', 'قيمة المخزون', fmt(stockValue))}
      ${stat('🛒', 'إجمالي المبيعات', fmt(salesTotal))}
      ${stat('📥', 'إجمالي المشتريات', fmt(purchTotal))}
      ${stat(profit >= 0 ? '📈' : '📉', 'الأرباح', fmt(Math.max(profit, 0)), profit < 0 ? 'danger' : 'ok')}
      ${stat('💸', 'الخسائر', fmt(Math.max(-profit, 0)), -profit > 0 ? 'danger' : '')}
      ${stat('⚠️', 'منتجات منخفضة المخزون', low, low ? 'danger' : 'ok')}
      ${stat('🚫', 'منتجات منتهية', out, out ? 'danger' : 'ok')}
      ${stat('💳', 'مدفوعات العملاء', fmt(salesPaid))}
    </div>
    <div class="two-col">
      <div class="section-card glass">
        <h3>📊 المبيعات اليومية — آخر 7 أيام</h3>
        ${barChart(days.map(d => [d.slice(5), daySum[d] || 0]))}
      </div>
      <div class="section-card glass">
        <h3>📈 المبيعات الشهرية — آخر 6 أشهر</h3>
        ${barChart(months.map(m => [m, monSum[m] || 0]), true)}
      </div>
    </div>
    <div class="two-col">
      <div class="section-card glass">
        <h3>🏆 المنتجات الأكثر مبيعًا</h3>
        ${top.length ? `<div class="table-wrap"><table><thead><tr><th>المنتج</th><th>الكمية المباعة</th></tr></thead><tbody>${top.map(([n, q]) => `<tr><td>${esc(n)}</td><td class="num">${q}</td></tr>`).join('')}</tbody></table></div>` : '<div class="empty-msg">لا توجد مبيعات بعد</div>'}
      </div>
      <div class="section-card glass">
        <h3>🕒 آخر العمليات</h3>
        ${lastOps.length ? lastOps.map(o => `<div class="alert-item">${o.txt}<small>${o.t}</small></div>`).join('') : '<div class="empty-msg">لا توجد عمليات بعد</div>'}
      </div>
    </div>`);
}
const stat = (ico, label, val, cls = '') => `
  <div class="stat-card glass"><span class="stat-icon">${ico}</span>
    <div class="stat-label">${label}</div>
    <div class="stat-value ${cls}">${val}</div>
  </div>`;
function barChart(data, dim = false) {
  const max = Math.max(...data.map(d => d[1]), 1);
  return `<div class="chart-box">${data.map(([l, v]) => `
    <div class="chart-col">
      <div class="chart-bar ${dim ? 'dim' : ''}" style="height:${Math.max(3, (v / max) * 120)}px" title="${fmt(v)}"></div>
      <div class="chart-lbl">${l}</div>
    </div>`).join('')}</div>`;
}

/* ═══════════ المنتجات ═══════════ */
let prodFilter = { q: '', cat: '', sort: 'name' };
function products() {
  pageHTML(`
    <div class="btn-row">
      ${isViewer() ? '<span class="badge silver">وضع العرض فقط</span>' : '<button class="btn-gold-sm" id="add-prod">➕ إضافة منتج جديد</button>'}
      <span style="flex:1"></span>
      <span class="badge gold">${S.products.length} منتج</span>
    </div>
    <div class="search-bar">
      <input id="pq" placeholder="🔍 بحث بالاسم أو SKU أو الباركود..." value="${esc(prodFilter.q)}">
      <select id="pcat"><option value="">كل التصنيفات</option>${[...new Set(S.products.map(p => p.category).filter(Boolean))].map(c => `<option ${prodFilter.cat === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select>
      <select id="psort">
        <option value="name" ${prodFilter.sort === 'name' ? 'selected' : ''}>فرز: الاسم</option>
        <option value="price" ${prodFilter.sort === 'price' ? 'selected' : ''}>فرز: سعر البيع</option>
        <option value="qty" ${prodFilter.sort === 'qty' ? 'selected' : ''}>فرز: الكمية</option>
        <option value="cat" ${prodFilter.sort === 'cat' ? 'selected' : ''}>فرز: التصنيف</option>
      </select>
    </div>
    <div id="prod-table"></div>`);
  const addProdBtn = $('#add-prod'); if (addProdBtn) addProdBtn.onclick = () => productForm();
  $('#pq').oninput = e => { prodFilter.q = e.target.value; renderProdTable(); };
  $('#pcat').onchange = e => { prodFilter.cat = e.target.value; renderProdTable(); };
  $('#psort').onchange = e => { prodFilter.sort = e.target.value; renderProdTable(); };
  renderProdTable();
}
function renderProdTable() {
  let list = S.products.filter(p =>
    (!prodFilter.q || p.name.includes(prodFilter.q) || p.sku?.includes(prodFilter.q) || p.barcode?.includes(prodFilter.q)) &&
    (!prodFilter.cat || p.category === prodFilter.cat));
  list.sort((a, b) => prodFilter.sort === 'name' ? a.name.localeCompare(b.name, 'ar')
    : prodFilter.sort === 'price' ? b.sellPrice - a.sellPrice
    : prodFilter.sort === 'qty' ? totalStock(b.id) - totalStock(a.id)
    : (a.category || '').localeCompare(b.category || '', 'ar'));
  $('#prod-table').innerHTML = list.length ? `<div class="table-wrap"><table>
    <thead><tr><th>المنتج</th><th>SKU</th><th>التصنيف</th><th>سعر الشراء</th><th>سعر البيع</th><th>الكمية</th><th>الحالة</th><th>إجراءات</th></tr></thead>
    <tbody>${list.map(p => {
      const t = totalStock(p.id);
      const st = t === 0 ? '<span class="badge warn">منتهي</span>' : t <= p.minStock ? '<span class="badge gold">منخفض</span>' : '<span class="badge ok">متوفر</span>';
      return `<tr>
        <td>${p.img ? `<img src="${p.img}" style="width:34px;height:34px;object-fit:cover;border-radius:8px;display:inline-block;vertical-align:middle;margin-left:8px">` : ''}${esc(p.name)}</td>
        <td class="num">${esc(p.sku || '—')}</td><td>${esc(p.category || '—')}</td>
        <td class="num">${fmt(p.buyPrice)}</td><td class="num">${fmt(p.sellPrice)}</td>
        <td class="num">${t}</td><td>${st}</td>
        ${isViewer() ? '<td style="color:var(--silver-2)">عرض فقط</td>' : `<td><button class="btn btn-sm" data-edit="${p.id}">تعديل</button>
        <button class="btn btn-danger btn-sm" data-del="${p.id}">حذف</button></td>`}</tr>`;
    }).join('')}</tbody></table></div>` : '<div class="empty-msg">لا توجد منتجات — أضف أول منتج الآن ➕</div>';
  $$('#prod-table [data-edit]').forEach(b => b.onclick = () => productForm(S.products.find(p => p.id === b.dataset.edit)));
  $$('#prod-table [data-del]').forEach(b => b.onclick = () => {
    const p = S.products.find(x => x.id === b.dataset.del);
    confirmModal('حذف منتج', `هل أنت متأكد من حذف «${esc(p.name)}»؟ لا يمكن التراجع عن هذا الإجراء.`, () => {
      S.products = S.products.filter(x => x.id !== p.id);
      delete S.stock[p.id];
      log('حذف منتج', p.name); save(); toast('تم حذف المنتج'); renderProdTable();
    });
  });
}
function productForm(p) {
  if (isViewer()) { noEdit(); return; }
  const isNew = !p; p = p || { name: '', sku: '', barcode: '', category: '', buyPrice: '', sellPrice: '', qty: 0, minStock: 5, expiry: '', desc: '', img: '' };
  openModal(`<h3>${isNew ? '➕ إضافة منتج جديد' : '✏️ تعديل منتج'}</h3>
    <div class="form-grid">
      <div class="field"><label>اسم المنتج *</label><input id="f-name" value="${esc(p.name)}"></div>
      <div class="field"><label>رقم المنتج SKU</label><input id="f-sku" value="${esc(p.sku)}"></div>
      <div class="field"><label>الباركود</label><input id="f-bar" value="${esc(p.barcode)}"></div>
      <div class="field"><label>التصنيف</label><input id="f-cat" value="${esc(p.category)}" list="cats"><datalist id="cats">${[...new Set(S.products.map(x => x.category).filter(Boolean))].map(c => `<option>${esc(c)}</option>`).join('')}</datalist></div>
      <div class="field"><label>سعر الشراء *</label><input id="f-buy" type="number" min="0" step="any" value="${p.buyPrice}"></div>
      <div class="field"><label>سعر البيع *</label><input id="f-sell" type="number" min="0" step="any" value="${p.sellPrice}"></div>
      <div class="field"><label>الحد الأدنى للمخزون</label><input id="f-min" type="number" min="0" value="${p.minStock}"></div>
      <div class="field"><label>تاريخ انتهاء الصلاحية</label><input id="f-exp" type="date" value="${p.expiry || ''}"></div>
      ${isNew ? `<div class="field"><label>الكمية الافتتاحية</label><input id="f-qty" type="number" min="0" value="0"></div>
      <div class="field"><label>المخزن</label><select id="f-wh">${S.warehouses.map(w => `<option value="${w.id}">${esc(w.name)}</option>`).join('')}</select></div>` : ''}
    </div>
    <div class="field" style="margin-bottom:12px"><label>وصف المنتج</label><textarea id="f-desc" rows="2">${esc(p.desc)}</textarea></div>
    <div class="field"><label>صورة المنتج</label><input id="f-img" type="file" accept="image/*"></div>
    <div class="modal-actions">
      <button class="btn-gold-sm" id="f-save">💾 حفظ</button>
      <button class="btn" id="f-cancel">إلغاء</button>
    </div>`);
  let imgData = p.img || '';
  $('#f-img').onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader(); r.onload = () => { imgData = r.result; }; r.readAsDataURL(f);
  };
  $('#f-cancel').onclick = closeModal;
  $('#f-save').onclick = () => {
    const name = $('#f-name').value.trim();
    const buyPrice = +$('#f-buy').value, sellPrice = +$('#f-sell').value;
    if (!name || isNaN(buyPrice) || isNaN(sellPrice)) { toast('يرجى إدخال الاسم والأسعار بشكل صحيح'); return; }
    const data = { name, sku: $('#f-sku').value.trim(), barcode: $('#f-bar').value.trim(), category: $('#f-cat').value.trim(), buyPrice, sellPrice, minStock: +$('#f-min').value || 0, expiry: $('#f-exp').value, desc: $('#f-desc').value.trim(), img: imgData };
    if (isNew) {
      const id = uid(); S.products.push({ id, ...data, dateAdded: today() });
      const q = +$('#f-qty').value || 0, wid = $('#f-wh').value;
      if (q > 0) addStock(id, wid, q);
      log('إضافة منتج', name); toast('تمت إضافة المنتج بنجاح');
    } else {
      Object.assign(p, data);
      log('تعديل منتج', name); toast('تم تحديث بيانات المنتج');
    }
    save(); closeModal(); renderProdTable();
  };
}

/* ═══════════ المخازن ═══════════ */
function warehouses() {
  pageHTML(`
    <div class="btn-row">${isViewer() ? '<span class="badge silver">وضع العرض فقط</span>' : '<button class="btn-gold-sm" id="add-wh">➕ إضافة مخزن جديد</button>'}</div>
    <div class="cards-grid">${S.warehouses.map(w => {
      const items = S.products.filter(p => stockOf(p.id, w.id) > 0);
      const val = items.reduce((a, p) => a + stockOf(p.id, w.id) * p.buyPrice, 0);
      return `<div class="stat-card glass" style="cursor:pointer" data-wh="${w.id}">
        <span class="stat-icon">🏬</span>
        <div class="stat-label">${esc(w.location || '')}</div>
        <div class="stat-value" style="font-size:21px">${esc(w.name)}</div>
        <div style="font-size:13px;color:var(--silver-2);margin-top:6px">${items.length} صنف · ${fmt(val)}</div>
      </div>`;
    }).join('') || '<div class="empty-msg">لا توجد مخازن بعد</div>'}</div>
    ${isViewer() ? '' : `<div class="section-card glass">
      <h3>🔄 نقل منتج بين المخازن</h3>
      <div class="form-grid">
        <div class="field"><label>المنتج</label><select id="tr-p">${S.products.map(p => `<option value="${p.id}">${esc(p.name)} (المتاح: ${totalStock(p.id)})</option>`).join('')}</select></div>
        <div class="field"><label>من مخزن</label><select id="tr-from">${S.warehouses.map(w => `<option value="${w.id}">${esc(w.name)}</option>`).join('')}</select></div>
        <div class="field"><label>إلى مخزن</label><select id="tr-to">${S.warehouses.map(w => `<option value="${w.id}">${esc(w.name)}</option>`).join('')}</select></div>
        <div class="field"><label>الكمية</label><input id="tr-qty" type="number" min="1" value="1"></div>
      </div>
      <button class="btn-gold-sm" id="tr-do">تنفيذ النقل</button>
    </div>`}
    <div class="section-card glass">
      <h3>🧾 سجل عمليات النقل</h3>
      ${S.transfers.length ? `<div class="table-wrap"><table><thead><tr><th>المنتج</th><th>من</th><th>إلى</th><th>الكمية</th><th>التاريخ</th><th>بواسطة</th></tr></thead><tbody>
        ${S.transfers.slice(0, 30).map(t => `<tr><td>${esc(t.pName)}</td><td>${esc(t.fromName)}</td><td>${esc(t.toName)}</td><td class="num">${t.qty}</td><td>${t.time}</td><td>${esc(t.user)}</td></tr>`).join('')}</tbody></table></div>` : '<div class="empty-msg">لا توجد عمليات نقل</div>'}
    </div>`);
  const addWhBtn = $('#add-wh'); if (addWhBtn) addWhBtn.onclick = () => whForm();
  $$('[data-wh]').forEach(c => c.onclick = () => whDetail(c.dataset.wh));
  const trDoBtn = $('#tr-do'); if (trDoBtn) trDoBtn.onclick = () => {
    const pid = $('#tr-p').value, from = $('#tr-from').value, to = $('#tr-to').value, q = +$('#tr-qty').value;
    const p = S.products.find(x => x.id === pid);
    if (!p || from === to || q <= 0) { toast('تحقق من البيانات المدخلة'); return; }
    if (stockOf(pid, from) < q) { toast(`الكمية غير متوفرة في ${S.warehouses.find(w => w.id === from)?.name}`); return; }
    addStock(pid, from, -q); addStock(pid, to, q);
    S.transfers.unshift({ id: uid(), pName: p.name, from, to, fromName: S.warehouses.find(w => w.id === from).name, toName: S.warehouses.find(w => w.id === to).name, qty: q, time: nowStr(), user: S.session.name });
    log('نقل مخزون', `${p.name}: ${q} وحدة`); save(); toast('تم نقل الكمية بنجاح'); warehouses();
  };
}
function whForm(w) {
  if (isViewer()) { noEdit(); return; }
  const isNew = !w; w = w || { name: '', location: '', manager: '' };
  openModal(`<h3>${isNew ? '➕ مخزن جديد' : '✏️ تعديل مخزن'}</h3>
    <div class="form-grid">
      <div class="field"><label>اسم المخزن *</label><input id="w-name" value="${esc(w.name)}"></div>
      <div class="field"><label>الموقع</label><input id="w-loc" value="${esc(w.location)}"></div>
      <div class="field"><label>المسؤول</label><input id="w-mgr" value="${esc(w.manager)}"></div>
    </div>
    <div class="modal-actions"><button class="btn-gold-sm" id="w-save">💾 حفظ</button><button class="btn" id="w-cancel">إلغاء</button></div>`);
  $('#w-cancel').onclick = closeModal;
  $('#w-save').onclick = () => {
    const name = $('#w-name').value.trim();
    if (!name) { toast('أدخل اسم المخزن'); return; }
    const data = { name, location: $('#w-loc').value.trim(), manager: $('#w-mgr').value.trim() };
    if (isNew) S.warehouses.push({ id: uid(), ...data });
    else Object.assign(w, data);
    log(isNew ? 'إضافة مخزن' : 'تعديل مخزن', name); save(); closeModal(); warehouses(); toast('تم الحفظ');
  };
}
function whDetail(wid) {
  const w = S.warehouses.find(x => x.id === wid);
  const items = S.products.filter(p => stockOf(p.id, wid) > 0);
  openModal(`<h3>🏬 ${esc(w.name)}</h3>
    <p style="color:var(--silver-2);margin-bottom:14px">${esc(w.location || '')} ${w.manager ? '· المسؤول: ' + esc(w.manager) : ''}</p>
    <div class="table-wrap"><table><thead><tr><th>المنتج</th><th>الكمية</th><th>القيمة</th></tr></thead><tbody>
      ${items.map(p => `<tr><td>${esc(p.name)}</td><td class="num">${stockOf(p.id, wid)}</td><td class="num">${fmt(stockOf(p.id, wid) * p.buyPrice)}</td></tr>`).join('') || '<tr><td colspan="3" style="text-align:center;color:var(--silver-2)">المخزن فارغ</td></tr>'}
    </tbody></table></div>
    <div class="modal-actions">
      ${isViewer() ? '' : '<button class="btn" id="w-edit">تعديل البيانات</button><button class="btn btn-danger" id="w-del">حذف المخزن</button>'}
      <button class="btn" id="w-close">إغلاق</button>
    </div>`);
  $('#w-close').onclick = closeModal;
  const wEditBtn = $('#w-edit'); if (wEditBtn) wEditBtn.onclick = () => whForm(w);
  const wDelBtn = $('#w-del'); if (wDelBtn) wDelBtn.onclick = () => {
    const hasStock = S.products.some(p => stockOf(p.id, wid) > 0);
    if (hasStock) { toast('لا يمكن حذف مخزن يحتوي على منتجات — انقلها أولاً'); return; }
    if (S.warehouses.length <= 1) { toast('يجب أن يبقى مخزن واحد على الأقل'); return; }
    confirmModal('حذف مخزن', `حذف «${esc(w.name)}» نهائيًا؟`, () => {
      S.warehouses = S.warehouses.filter(x => x.id !== wid);
      log('حذف مخزن', w.name); save(); closeModal(); warehouses();
    });
  };
}

/* ═══════════ الموردون والعملاء ═══════════ */
function partyPage(kind) {
  const isCust = kind === 'customers';
  const list = isCust ? S.customers : S.suppliers;
  const label = isCust ? 'عميل' : 'مورد';
  pageHTML(`
    <div class="btn-row">${isViewer() ? '<span class="badge silver">وضع العرض فقط</span>' : `<button class="btn-gold-sm" id="add-party">➕ إضافة ${label}</button>`}</div>
    <div class="table-wrap"><table><thead><tr><th>الاسم</th><th>الهاتف</th><th>العنوان</th>${isCust ? '<th>إجمالي المشتريات</th><th>المدفوع</th>' : '<th>إجمالي التوريد</th><th>المدفوع له</th>'}<th>الرصيد (دين)</th><th>إجراءات</th></tr></thead><tbody>
    ${list.map(c => {
      const invs = isCust ? S.sales.filter(s => s.customerId === c.id) : S.purchases.filter(s => s.supplierId === c.id);
      const tot = invs.reduce((a, s) => a + s.total, 0), paid = invs.reduce((a, s) => a + s.paid, 0);
      return `<tr><td>${esc(c.name)}</td><td class="num" style="white-space:nowrap">${esc(c.phone || '—')}</td><td>${esc(c.address || '—')}</td>
        <td class="num">${fmt(tot)}</td><td class="num">${fmt(paid)}</td>
        <td class="num">${c.balance > 0 ? `<span class="badge warn">${fmt(c.balance)}</span>` : '<span class="badge ok">0</span>'}</td>
        <td><button class="btn btn-sm" data-hist="${c.id}">السجل</button>
        ${isViewer() ? '' : `<button class="btn btn-sm" data-edit="${c.id}">تعديل</button>
        <button class="btn btn-danger btn-sm" data-del="${c.id}">حذف</button>`}</td></tr>`;
    }).join('') || `<tr><td colspan="7" style="text-align:center;color:var(--silver-2);padding:30px">لا يوجد ${isCust ? 'عملاء' : 'موردون'} بعد</td></tr>`}
    </tbody></table></div>`);
  const addPartyBtn = $('#add-party'); if (addPartyBtn) addPartyBtn.onclick = () => partyForm(kind);
  $$('[data-edit]').forEach(b => b.onclick = () => partyForm(kind, list.find(x => x.id === b.dataset.edit)));
  $$('[data-del]').forEach(b => b.onclick = () => {
    const c = list.find(x => x.id === b.dataset.delete || x.id === b.dataset.del);
    confirmModal(`حذف ${label}`, `حذف «${esc(c.name)}»؟ ستبقى فواتيره محفوظة في السجلات.`, () => {
      if (isCust) S.customers = S.customers.filter(x => x.id !== c.id); else S.suppliers = S.suppliers.filter(x => x.id !== c.id);
      log(`حذف ${label}`, c.name); save(); partyPage(kind);
    });
  });
  $$('[data-hist]').forEach(b => b.onclick = () => {
    const c = list.find(x => x.id === b.dataset.hist);
    const invs = (isCust ? S.sales.filter(s => s.customerId === c.id) : S.purchases.filter(s => s.supplierId === c.id)).slice(0, 15);
    openModal(`<h3>${isCust ? 'سجل مشتريات' : 'سجل التعاملات'} — ${esc(c.name)}</h3>
      ${invs.length ? `<div class="table-wrap"><table><thead><tr><th>الرقم</th><th>التاريخ</th><th>الإجمالي</th><th>المدفوع</th><th>المتبقي</th></tr></thead><tbody>
      ${invs.map(i => `<tr><td class="num">${i.no}</td><td>${i.date}</td><td class="num">${fmt(i.total)}</td><td class="num">${fmt(i.paid)}</td><td class="num">${fmt(i.total - i.paid)}</td></tr>`).join('')}</tbody></table></div>` : '<div class="empty-msg">لا توجد تعاملات مسجلة</div>'}
      <div class="modal-actions"><button class="btn" id="h-close">إغلاق</button></div>`);
    $('#h-close').onclick = closeModal;
  });
}
function partyForm(kind, c) {
  if (isViewer()) { noEdit(); return; }
  const isCust = kind === 'customers';
  const isNew = !c; c = c || { name: '', phone: '', address: '' };
  openModal(`<h3>${isNew ? '➕ إضافة' : '✏️ تعديل'} ${isCust ? 'عميل' : 'مورد'}</h3>
    <div class="form-grid">
      <div class="field"><label>الاسم *</label><input id="c-name" value="${esc(c.name)}"></div>
      <div class="field"><label>رقم الهاتف</label><input id="c-phone" value="${esc(c.phone)}"></div>
      <div class="field"><label>العنوان</label><input id="c-addr" value="${esc(c.address)}"></div>
    </div>
    <div class="modal-actions"><button class="btn-gold-sm" id="c-save">💾 حفظ</button><button class="btn" id="c-cancel">إلغاء</button></div>`);
  $('#c-cancel').onclick = closeModal;
  $('#c-save').onclick = () => {
    const name = $('#c-name').value.trim();
    if (!name) { toast('أدخل الاسم'); return; }
    const data = { name, phone: $('#c-phone').value.trim(), address: $('#c-addr').value.trim() };
    if (isNew) (isCust ? S.customers : S.suppliers).push({ id: uid(), ...data, balance: 0 });
    else Object.assign(c, data);
    log(isNew ? 'إضافة' : 'تعديل' + (isCust ? ' عميل' : ' مورد'), name); save(); closeModal(); partyPage(kind); toast('تم الحفظ');
  };
}
const customers = () => partyPage('customers');
const suppliers = () => partyPage('suppliers');

/* ═══════════ المشتريات ═══════════ */
function purchases() {
  pageHTML(`
    ${isViewer() ? '<div class="btn-row"><span class="badge silver">وضع العرض فقط</span></div>' : '<div class="btn-row"><button class="btn-gold-sm" id="new-pur">➕ فاتورة شراء جديدة</button></div>'}
    <div class="section-card glass"><h3>📥 سجل المشتريات</h3>
    ${S.purchases.length ? `<div class="table-wrap"><table><thead><tr><th>الرقم</th><th>المورد</th><th>التاريخ</th><th>الإجمالي</th><th>المدفوع</th><th>المتبقي</th><th>إجراءات</th></tr></thead><tbody>
      ${S.purchases.map(p => `<tr><td class="num">${p.no}</td><td>${esc(p.supplierName)}</td><td>${p.date}</td>
        <td class="num">${fmt(p.total)}</td><td class="num">${fmt(p.paid)}</td>
        <td class="num">${p.total - p.paid > 0 ? `<span class="badge warn">${fmt(p.total - p.paid)}</span>` : '<span class="badge ok">مسدد</span>'}</td>
        <td><button class="btn btn-sm" data-view="${p.id}">عرض</button>
        ${isViewer() ? '' : `<button class="btn btn-danger btn-sm" data-del="${p.id}">حذف</button>`}</td></tr>`).join('')}
    </tbody></table></div>` : '<div class="empty-msg">لا توجد فواتير شراء بعد</div>'}</div>`);
  const newPurBtn = $('#new-pur'); if (newPurBtn) newPurBtn.onclick = () => purchaseForm();
  $$('[data-view]').forEach(b => b.onclick = () => invoiceView(S.purchases.find(x => x.id === b.dataset.view), 'شراء'));
  $$('[data-del]').forEach(b => b.onclick = () => {
    const p = S.purchases.find(x => x.id === b.dataset.del);
    confirmModal('حذف فاتورة شراء', `حذف الفاتورة ${p.no}؟ <b>لن يتم خصم الكميات من المخزون تلقائيًا</b> — عدّل المخزون يدويًا إن لزم.`, () => {
      S.purchases = S.purchases.filter(x => x.id !== p.id);
      log('حذف فاتورة شراء', p.no); save(); purchases();
    });
  });
}
function purchaseForm() {
  if (!S.suppliers.length) { toast('أضف موردًا أولاً من قسم الموردون'); return; }
  if (!S.warehouses.length) { toast('أضف مخزنًا أولاً من قسم المخازن'); return; }
  let items = [];
  openModal(`<h3>📥 فاتورة شراء جديدة</h3>
    <div class="form-grid">
      <div class="field"><label>المورد</label><select id="p-sup">${S.suppliers.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select></div>
      <div class="field"><label>المخزن المستلم</label><select id="p-wh">${S.warehouses.map(w => `<option value="${w.id}">${esc(w.name)}</option>`).join('')}</select></div>
    </div>
    <div class="section-card" style="background:rgba(255,255,255,.03);padding:14px">
      <div class="form-grid">
        <div class="field"><label>المنتج</label><select id="p-prod">${S.products.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select></div>
        <div class="field"><label>الكمية</label><input id="p-qty" type="number" min="1" value="1"></div>
        <div class="field"><label>سعر الشراء</label><input id="p-price" type="number" min="0" step="any"></div>
      </div>
      <button class="btn" id="p-add">إضافة للفاتورة</button>
    </div>
    <div id="p-items"></div>
    <div class="form-grid" style="margin-top:12px">
      <div class="field"><label>المبلغ المدفوع</label><input id="p-paid" type="number" min="0" step="any" value="0"></div>
    </div>
    <div id="p-total" style="font-size:18px;font-weight:700;color:var(--gold-2)"></div>
    <div class="modal-actions">
      <button class="btn-gold-sm" id="p-save">✅ اعتماد الفاتورة وتحديث المخزون</button>
      <button class="btn" id="p-cancel">إلغاء</button>
    </div>`);
  const renderItems = () => {
    $('#p-items').innerHTML = items.length ? `<div class="table-wrap" style="margin-top:12px"><table><thead><tr><th>المنتج</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th><th></th></tr></thead><tbody>
      ${items.map((i, x) => `<tr><td>${esc(i.pName)}</td><td class="num">${i.qty}</td><td class="num">${fmt(i.price)}</td><td class="num">${fmt(i.qty * i.price)}</td>
      <td><button class="btn btn-danger btn-sm" data-rm="${x}">✕</button></td></tr>`).join('')}</tbody></table></div>` : '';
    const total = items.reduce((a, i) => a + i.qty * i.price, 0);
    $('#p-total').textContent = 'إجمالي الفاتورة: ' + fmt(total);
    $$('#p-items [data-rm]').forEach(b => b.onclick = () => { items.splice(+b.dataset.rm, 1); renderItems(); });
  };
  const syncPrice = () => { const p = S.products.find(x => x.id === $('#p-prod').value); if (p) $('#p-price').value = p.buyPrice; };
  $('#p-prod').onchange = syncPrice; syncPrice();
  $('#p-add').onclick = () => {
    const p = S.products.find(x => x.id === $('#p-prod').value);
    const qty = +$('#p-qty').value, price = +$('#p-price').value;
    if (!p || qty <= 0 || isNaN(price)) { toast('تحقق من بيانات المنتج'); return; }
    items.push({ pid: p.id, pName: p.name, qty, price, buyPrice: price });
    renderItems();
  };
  $('#p-cancel').onclick = closeModal;
  $('#p-save').onclick = () => {
    if (!items.length) { toast('أضف منتجات للفاتورة أولاً'); return; }
    const total = items.reduce((a, i) => a + i.qty * i.price, 0);
    const paid = Math.min(+$('#p-paid').value || 0, total);
    const sup = S.suppliers.find(x => x.id === $('#p-sup').value);
    const wid = $('#p-wh').value;
    const pur = { id: uid(), no: S.settings.purchasePrefix + '-' + String(S.seq.purchase++).padStart(4, '0'), supplierId: sup.id, supplierName: sup.name, warehouseId: wid, items, total, paid, date: today(), time: nowStr(), user: S.session.name };
    S.purchases.unshift(pur);
    for (const i of items) {
      addStock(i.pid, wid, i.qty);
      const p = S.products.find(x => x.id === i.pid);
      if (p) p.buyPrice = i.price; // تحديث آخر سعر شراء
    }
    sup.balance = Math.max(0, (sup.balance || 0) + (total - paid));
    log('فاتورة شراء', `${pur.no} بقيمة ${fmt(total)}`); save();
    closeModal(); toast('تم اعتماد فاتورة الشراء وتحديث المخزون'); purchases();
  };
}

/* ═══════════ المبيعات ═══════════ */
function sales() {
  pageHTML(`
    ${isViewer() ? '<div class="btn-row"><span class="badge silver">وضع العرض فقط</span></div>' : '<div class="btn-row"><button class="btn-gold-sm" id="new-sale">➕ فاتورة بيع جديدة</button></div>'}
    <div class="section-card glass"><h3>🛒 سجل المبيعات</h3>
    ${S.sales.length ? `<div class="table-wrap"><table><thead><tr><th>الرقم</th><th>العميل</th><th>التاريخ</th><th>الإجمالي</th><th>المدفوع</th><th>المتبقي</th><th>إجراءات</th></tr></thead><tbody>
      ${S.sales.map(s => `<tr><td class="num">${s.no}</td><td>${esc(s.customerName)}</td><td>${s.date}</td>
        <td class="num">${fmt(s.total)}</td><td class="num">${fmt(s.paid)}</td>
        <td class="num">${s.total - s.paid > 0 ? `<span class="badge warn">${fmt(s.total - s.paid)}</span>` : '<span class="badge ok">مسدد</span>'}</td>
        <td><button class="btn btn-sm" data-view="${s.id}">عرض</button>
        <button class="btn btn-sm" data-print="${s.id}">🖨️ طباعة</button>
        ${isViewer() ? '' : `<button class="btn btn-danger btn-sm" data-del="${s.id}">حذف</button>`}</td></tr>`).join('')}
    </tbody></table></div>` : '<div class="empty-msg">لا توجد فواتير بيع بعد</div>'}</div>`);
  const newSaleBtn = $('#new-sale'); if (newSaleBtn) newSaleBtn.onclick = () => saleForm();
  $$('[data-view]').forEach(b => b.onclick = () => invoiceView(S.sales.find(x => x.id === b.dataset.view), 'بيع'));
  $$('[data-print]').forEach(b => b.onclick = () => printInvoice(S.sales.find(x => x.id === b.dataset.print)));
  $$('[data-del]').forEach(b => b.onclick = () => {
    const s = S.sales.find(x => x.id === b.dataset.del);
    confirmModal('حذف فاتورة بيع', `حذف الفاتورة ${s.no}؟ <b>لن يتم إرجاع الكميات للمخزون تلقائيًا</b>.`, () => {
      S.sales = S.sales.filter(x => x.id !== s.id);
      log('حذف فاتورة بيع', s.no); save(); sales();
    });
  });
}
function saleForm() {
  if (!S.products.length) { toast('أضف منتجات أولاً'); return; }
  let items = [];
  openModal(`<h3>🛒 فاتورة بيع جديدة</h3>
    <div class="form-grid">
      <div class="field"><label>العميل</label><select id="s-cust">${S.customers.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join('') || '<option value="">عميل نقدي</option>'}</select></div>
      <div class="field"><label>المخزن</label><select id="s-wh">${S.warehouses.map(w => `<option value="${w.id}">${esc(w.name)}</option>`).join('')}</select></div>
    </div>
    <div class="section-card" style="background:rgba(255,255,255,.03);padding:14px">
      <div class="form-grid">
        <div class="field"><label>المنتج</label><select id="s-prod">${S.products.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select></div>
        <div class="field"><label>المتاح</label><input id="s-avail" disabled></div>
        <div class="field"><label>الكمية</label><input id="s-qty" type="number" min="1" value="1"></div>
      </div>
      <button class="btn" id="s-add">إضافة للفاتورة</button>
    </div>
    <div id="s-items"></div>
    <div class="form-grid" style="margin-top:12px">
      <div class="field"><label>خصم (${S.settings.currency})</label><input id="s-disc" type="number" min="0" step="any" value="0"></div>
      <div class="field"><label>الضريبة %</label><input id="s-tax" type="number" min="0" step="any" value="${S.settings.taxRate}"></div>
      <div class="field"><label>المبلغ المدفوع</label><input id="s-paid" type="number" min="0" step="any" value="0"></div>
    </div>
    <div id="s-summary" style="line-height:2;font-weight:700;color:var(--gold-2)"></div>
    <div class="modal-actions">
      <button class="btn-gold-sm" id="s-save">✅ إتمام البيع وخصم المخزون</button>
      <button class="btn" id="s-cancel">إلغاء</button>
    </div>`);
  const calc = () => {
    const sub = items.reduce((a, i) => a + i.qty * i.price, 0);
    const disc = +$('#s-disc').value || 0;
    const tax = Math.max(0, (+$('#s-tax').value || 0)) * (sub - disc) / 100;
    const total = Math.max(0, sub - disc + tax);
    $('#s-summary').innerHTML = `المجموع: ${fmt(sub)}<br>الإجمالي بعد الخصم والضريبة: ${fmt(total)}`;
    return { sub, disc, tax, total };
  };
  const renderItems = () => {
    $('#s-items').innerHTML = items.length ? `<div class="table-wrap" style="margin-top:12px"><table><thead><tr><th>المنتج</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th><th></th></tr></thead><tbody>
      ${items.map((i, x) => `<tr><td>${esc(i.pName)}</td><td class="num">${i.qty}</td><td class="num">${fmt(i.price)}</td><td class="num">${fmt(i.qty * i.price)}</td>
      <td><button class="btn btn-danger btn-sm" data-rm="${x}">✕</button></td></tr>`).join('')}</tbody></table></div>` : '';
    $$('#s-items [data-rm]').forEach(b => b.onclick = () => { items.splice(+b.dataset.rm, 1); renderItems(); calc(); });
    calc();
  };
  const syncAvail = () => {
    const wid = $('#s-wh').value, pid = $('#s-prod').value;
    $('#s-avail').value = stockOf(pid, wid);
  };
  $('#s-prod').onchange = syncAvail; $('#s-wh').onchange = syncAvail; syncAvail();
  $('#s-disc').oninput = calc; $('#s-tax').oninput = calc;
  $('#s-add').onclick = () => {
    const wid = $('#s-wh').value, pid = $('#s-prod').value, qty = +$('#s-qty').value;
    const p = S.products.find(x => x.id === pid);
    const avail = stockOf(pid, wid);
    if (!p || qty <= 0) { toast('تحقق من البيانات'); return; }
    if (qty > avail) { toast(`الكمية غير متوفرة — المتاح ${avail} فقط`); return; }
    const ex = items.find(i => i.pid === pid);
    if (ex) { if (ex.qty + qty > avail) { toast('إجمالي الكمية المطلوبة يتجاوز المتاح'); return; } ex.qty += qty; }
    else items.push({ pid, pName: p.name, qty, price: p.sellPrice, buyPrice: p.buyPrice });
    renderItems();
  };
  $('#s-cancel').onclick = closeModal;
  $('#s-save').onclick = () => {
    if (!items.length) { toast('أضف منتجات للفاتورة أولاً'); return; }
    const { sub, disc, tax, total } = calc();
    const wid = $('#s-wh').value;
    // التحقق النهائي من المخزون
    for (const i of items) {
      const already = S.sales.flatMap(s => s.items).filter(x => x.pid === i.pid);
      if (stockOf(i.pid, wid) < i.qty) { toast(`الكمية غير متوفرة للمنتج ${i.pName}`); return; }
    }
    const paid = Math.min(+$('#s-paid').value || 0, total);
    const custId = $('#s-cust').value;
    const cust = S.customers.find(x => x.id === custId);
    const sale = { id: uid(), no: S.settings.invoicePrefix + '-' + String(S.seq.sale++).padStart(4, '0'), customerId: custId, customerName: cust ? cust.name : 'عميل نقدي', warehouseId: wid, items, sub, disc, tax, total, paid, date: today(), time: nowStr(), user: S.session.name };
    S.sales.unshift(sale);
    for (const i of items) addStock(i.pid, wid, -i.qty);
    if (cust) cust.balance = Math.max(0, (cust.balance || 0) + (total - paid));
    log('فاتورة بيع', `${sale.no} بقيمة ${fmt(total)}`); save();
    closeModal(); toast('تم إتمام البيع وتحديث المخزون');
    printInvoice(sale); sales();
  };
}
function invoiceView(inv, type) {
  openModal(`<h3>🧾 فاتورة ${type} ${inv.no}</h3>
    <p style="color:var(--silver-2);margin-bottom:12px">${type === 'بيع' ? 'العميل' : 'المورد'}: ${esc(type === 'بيع' ? inv.customerName : inv.supplierName)} · ${inv.date} · بواسطة ${esc(inv.user)}</p>
    <div class="table-wrap"><table><thead><tr><th>المنتج</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr></thead><tbody>
      ${inv.items.map(i => `<tr><td>${esc(i.pName)}</td><td class="num">${i.qty}</td><td class="num">${fmt(i.price)}</td><td class="num">${fmt(i.qty * i.price)}</td></tr>`).join('')}
    </tbody></table></div>
    <p style="margin-top:14px;line-height:2;font-weight:700;color:var(--gold-2)">
      ${inv.sub !== undefined ? `المجموع: ${fmt(inv.sub)} · الخصم: ${fmt(inv.disc || 0)} · الضريبة: ${fmt(inv.tax || 0)}<br>` : ''}
      الإجمالي: ${fmt(inv.total)} · المدفوع: ${fmt(inv.paid)} · المتبقي: ${fmt(inv.total - inv.paid)}</p>
    <div class="modal-actions"><button class="btn" id="v-close">إغلاق</button></div>`);
  $('#v-close').onclick = closeModal;
}
function printInvoice(sale) {
  const rows = sale.items.map(i => `<tr><td>${esc(i.pName)}</td><td>${i.qty}</td><td>${Number(i.price).toLocaleString('ar-EG')}</td><td>${(i.qty * i.price).toLocaleString('ar-EG')}</td></tr>`).join('');
  const w = window.open('', '_blank');
  w.document.write(`<!doctype html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><title>فاتورة ${sale.no}</title>
    <style>body{font-family:'Cairo',sans-serif;padding:30px;color:#111}h1{color:#8a6d1a;font-size:22px;margin-bottom:4px}table{width:100%;border-collapse:collapse;margin:16px 0;font-size:13px}th{background:#f5edd8;padding:8px;text-align:right}td{padding:7px 8px;border-top:1px solid #eee;text-align:right}.tot{font-weight:700;font-size:15px;line-height:2}</style></head>
    <body><h1>👑 ${esc(S.settings.orgName)}</h1><div>فاتورة بيع رقم: ${sale.no}</div>
    <div>العميل: ${esc(sale.customerName)} · التاريخ: ${sale.date}</div>
    <table><thead><tr><th>المنتج</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="tot">المجموع: ${sale.sub.toLocaleString('ar-EG')} ${S.settings.currency}<br>
    الخصم: ${sale.disc.toLocaleString('ar-EG')} · الضريبة: ${sale.tax.toLocaleString('ar-EG')}<br>
    الإجمالي: ${sale.total.toLocaleString('ar-EG')} ${S.settings.currency}<br>
    المدفوع: ${sale.paid.toLocaleString('ar-EG')} · المتبقي: ${(sale.total - sale.paid).toLocaleString('ar-EG')}</div>
    <p style="margin-top:24px;text-align:center;color:#888;font-size:12px">شكراً لتعاملكم معنا — إدارة المخازن | VIP</p>
    <script>window.onload=()=>window.print()<\/script></body></html>`);
  w.document.close();
}

/* ═══════════ التقارير ═══════════ */
let repPeriod = 'all';
function reports() {
  const periods = { today: 'اليوم', week: 'هذا الأسبوع', month: 'هذا الشهر', all: 'كل الفترات' };
  pageHTML(`
    <div class="btn-row">
      ${Object.entries(periods).map(([k, v]) => `<button class="btn ${repPeriod === k ? 'btn-gold-sm' : ''}" data-per="${k}">${v}</button>`).join('')}
    </div>
    <div id="rep-body"></div>`);
  $$('[data-per]').forEach(b => b.onclick = () => { repPeriod = b.dataset.per; reports(); });
  renderReports();
}
function periodFilter() {
  const now = new Date();
  if (repPeriod === 'today') { const d = today(); return x => x.date === d; }
  if (repPeriod === 'week') { const w = new Date(now - 7 * 864e5).toISOString().slice(0, 10); return x => x.date >= w; }
  if (repPeriod === 'month') { const m = now.toISOString().slice(0, 7); return x => x.date.startsWith(m); }
  return () => true;
}
function renderReports() {
  const f = periodFilter();
  const sales = S.sales.filter(f), purchs = S.purchases.filter(f);
  const salesTotal = sales.reduce((a, s) => a + s.total, 0);
  const cogs = sales.reduce((a, s) => a + s.items.reduce((x, i) => x + i.qty * i.buyPrice, 0), 0);
  const profit = salesTotal - cogs;
  const purchTotal = purchs.reduce((a, s) => a + s.total, 0);
  const soldMap = {}, notSold = [];
  for (const s of S.sales) for (const i of s.items) soldMap[i.pName] = (soldMap[i.pName] || 0) + i.qty;
  for (const p of S.products) if (!soldMap[p.name]) notSold.push(p);
  const shortages = S.products.filter(p => totalStock(p.id) <= p.minStock);
  const custDebt = S.customers.reduce((a, c) => a + (c.balance || 0), 0);
  const supDebt = S.suppliers.reduce((a, c) => a + (c.balance || 0), 0);

  const repTable = (title, rows, head) => `
    <div class="section-card glass"><h3>${title}</h3>
      <div class="table-wrap"><table><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>
      ${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('') || `<tr><td colspan="${head.length}" style="text-align:center;color:var(--silver-2)">لا توجد بيانات</td></tr>`}
      </tbody></table></div></div>`;

  const exportBtn = (id, name) => `<button class="btn btn-sm" onclick="exportCSV('${id}')">⬇️ تصدير Excel</button>
    <button class="btn btn-sm" onclick="window.print()">🖨️ طباعة / PDF</button>`;

  $('#rep-body').innerHTML = `
    <div class="cards-grid">
      ${stat('🛒', 'المبيعات (الفترة)', fmt(salesTotal))}
      ${stat('📥', 'المشتريات (الفترة)', fmt(purchTotal))}
      ${stat('📈', 'الأرباح', fmt(Math.max(profit, 0)), profit < 0 ? 'danger' : 'ok')}
      ${stat('💸', 'الخسائر', fmt(Math.max(-profit, 0)), -profit > 0 ? 'danger' : '')}
      ${stat('💰', 'قيمة المخزون الحالي', fmt(S.products.reduce((a, p) => a + totalStock(p.id) * p.buyPrice, 0)))}
      ${stat('⚠️', 'النواقص', shortages.length, shortages.length ? 'danger' : 'ok')}
      ${stat('👥', 'ديون العملاء', fmt(custDebt), custDebt ? 'danger' : '')}
      ${stat('🤝', 'مستحقات الموردين', fmt(supDebt), supDebt ? 'danger' : '')}
    </div>
    <div style="display:flex;gap:10px;margin-bottom:18px;flex-wrap:wrap">
      <button class="btn" onclick="exportCSV('sales')">⬇️ مبيعات Excel</button>
      <button class="btn" onclick="exportCSV('purchases')">⬇️ مشتريات Excel</button>
      <button class="btn" onclick="exportCSV('stock')">⬇️ المخزون Excel</button>
      <button class="btn" onclick="exportCSV('debts')">⬇️ الديون Excel</button>
    </div>
    <div id="print-area">
      ${repTable('🛒 تقرير المبيعات', sales.map(s => [`<span class="num">${s.no}</span>`, esc(s.customerName), s.date, `<span class="num">${fmt(s.total)}</span>`, `<span class="num">${fmt(s.paid)}</span>`]), ['الرقم', 'العميل', 'التاريخ', 'الإجمالي', 'المدفوع'])}
      ${repTable('📥 تقرير المشتريات', purchs.map(s => [`<span class="num">${s.no}</span>`, esc(s.supplierName), s.date, `<span class="num">${fmt(s.total)}</span>`]), ['الرقم', 'المورد', 'التاريخ', 'الإجمالي'])}
      ${repTable('📦 تقرير المخزون الحالي', S.products.map(p => [esc(p.name), esc(p.category || '—'), `<span class="num">${totalStock(p.id)}</span>`, `<span class="num">${fmt(p.buyPrice)}</span>`, `<span class="num">${fmt(totalStock(p.id) * p.buyPrice)}</span>`]), ['المنتج', 'التصنيف', 'الكمية', 'سعر الشراء', 'القيمة'])}
      ${repTable('🏆 الأكثر مبيعًا', Object.entries(soldMap).sort((a, b) => b[1] - a[1]).map(([n, q]) => [esc(n), `<span class="num">${q}</span>`]), ['المنتج', 'الكمية المباعة'])}
      ${repTable('🐌 الأقل حركة', notSold.map(p => [esc(p.name), `<span class="num">${totalStock(p.id)}</span>`]), ['المنتج', 'الرصيد الحالي'])}
      ${repTable('⚠️ تقرير النواقص', shortages.map(p => [esc(p.name), `<span class="num">${totalStock(p.id)}</span>`, `<span class="num">${p.minStock}</span>`]), ['المنتج', 'المتاح', 'الحد الأدنى'])}
      ${repTable('🏬 تقرير المخازن', S.warehouses.map(w => [esc(w.name), esc(w.location || '—'), `<span class="num">${S.products.filter(p => stockOf(p.id, w.id) > 0).length}</span>`]), ['المخزن', 'الموقع', 'عدد الأصناف'])}
      ${repTable('👥 تقرير العملاء', S.customers.map(c => [esc(c.name), esc(c.phone || '—'), `<span class="num">${fmt(S.sales.filter(s => s.customerId === c.id).reduce((a, s) => a + s.total, 0))}</span>`, `<span class="num">${fmt(c.balance || 0)}</span>`]), ['العميل', 'الهاتف', 'إجمالي المشتريات', 'الدين'])}
      ${repTable('🤝 تقرير الموردين', S.suppliers.map(s => [esc(s.name), esc(s.phone || '—'), `<span class="num">${fmt(S.purchases.filter(p => p.supplierId === s.id).reduce((a, p) => a + p.total, 0))}</span>`, `<span class="num">${fmt(s.balance || 0)}</span>`]), ['المورد', 'الهاتف', 'إجمالي التوريد', 'المستحق'])}
      ${repTable('💳 تقرير الديون', [...S.customers.filter(c => c.balance > 0).map(c => ['عميل', esc(c.name), `<span class="num">${fmt(c.balance)}</span>`]), ...S.suppliers.filter(s => s.balance > 0).map(s => ['مورد', esc(s.name), `<span class="num">${fmt(s.balance)}</span>`])], ['النوع', 'الاسم', 'المبلغ'])}
    </div>`;
}
window.exportCSV = function (what) {
  const f = periodFilter();
  let rows = [], name = '';
  if (what === 'sales') { name = 'المبيعات'; rows = [['الرقم', 'العميل', 'التاريخ', 'الإجمالي', 'المدفوع', 'المتبقي'], ...S.sales.filter(f).map(s => [s.no, s.customerName, s.date, s.total, s.paid, s.total - s.paid])]; }
  if (what === 'purchases') { name = 'المشتريات'; rows = [['الرقم', 'المورد', 'التاريخ', 'الإجمالي', 'المدفوع'], ...S.purchases.filter(f).map(s => [s.no, s.supplierName, s.date, s.total, s.paid])]; }
  if (what === 'stock') { name = 'المخزون'; rows = [['المنتج', 'التصنيف', 'الكمية', 'سعر الشراء', 'القيمة'], ...S.products.map(p => [p.name, p.category || '', totalStock(p.id), p.buyPrice, totalStock(p.id) * p.buyPrice])]; }
  if (what === 'debts') { name = 'الديون'; rows = [['النوع', 'الاسم', 'المبلغ'], ...S.customers.filter(c => c.balance > 0).map(c => ['عميل', c.name, c.balance]), ...S.suppliers.filter(s => s.balance > 0).map(s => ['مورد', s.name, s.balance])]; }
  const csv = '\uFEFF' + rows.map(r => r.map(c => `"${String(c ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = `${name}-${today()}.csv`;
  a.click();
  toast('تم تصدير التقرير بنجاح');
};

/* ═══════════ المستخدمون ═══════════ */
function users() {
  if (S.session.role !== 'admin') { pageHTML('<div class="empty-msg">هذا القسم للمدير فقط</div>'); return; }
  pageHTML(`
    <div class="btn-row"><button class="btn-gold-sm" id="add-user">➕ إضافة مستخدم</button></div>
    <div class="section-card glass"><h3>👤 المستخدمون والصلاحيات</h3>
      <div class="table-wrap"><table><thead><tr><th>الاسم</th><th>اسم المستخدم</th><th>الدور</th><th>إجراءات</th></tr></thead><tbody>
      ${S.users.map(u => `<tr><td>${esc(u.name)}</td><td class="num">${esc(u.username)}</td>
        <td><span class="badge ${u.role === 'admin' ? 'gold' : 'silver'}">${ROLES[u.role].label}</span></td>
        <td>${u.id === S.session.id ? '<span class="badge ok">أنت</span>' : `<button class="btn btn-sm" data-edit="${u.id}">تعديل</button>
        <button class="btn btn-danger btn-sm" data-del="${u.id}">حذف</button>`}</td></tr>`).join('')}
      </tbody></table></div></div>
    <div class="two-col">
      <div class="section-card glass"><h3>🔐 سجل تسجيل الدخول</h3>
        ${S.loginLogs.slice(0, 15).map(l => `<div class="alert-item">دخول: ${esc(l.user)}<small>${l.time} · ${ROLES[l.role]?.label || ''}</small></div>`).join('') || '<div class="empty-msg">لا يوجد سجل</div>'}</div>
      <div class="section-card glass"><h3>📝 سجل العمليات</h3>
        ${S.logs.slice(0, 20).map(l => `<div class="alert-item">${esc(l.action)} — ${esc(l.details)}<small>${l.time} · بواسطة ${esc(l.user)}</small></div>`).join('') || '<div class="empty-msg">لا يوجد سجل</div>'}</div>
    </div>`);
  $('#add-user').onclick = () => userForm();
  $$('[data-edit]').forEach(b => b.onclick = () => userForm(S.users.find(u => u.id == b.dataset.edit)));
  $$('[data-del]').forEach(b => b.onclick = () => {
    const u = S.users.find(x => x.id == b.dataset.del);
    confirmModal('حذف مستخدم', `حذف المستخدم «${esc(u.name)}»؟`, () => {
      S.users = S.users.filter(x => x.id != u.id); log('حذف مستخدم', u.name); save(); users();
    });
  });
}
function userForm(u) {
  const isNew = !u; u = u || { name: '', username: '', password: '', role: 'sales' };
  openModal(`<h3>${isNew ? '➕ مستخدم جديد' : '✏️ تعديل مستخدم'}</h3>
    <div class="form-grid">
      <div class="field"><label>الاسم *</label><input id="u-name" value="${esc(u.name)}"></div>
      <div class="field"><label>اسم المستخدم</label><input id="u-user" value="${esc(u.username)}"></div>
      <div class="field"><label>كلمة المرور *</label><input id="u-pass" value="${esc(u.password)}"></div>
      <div class="field"><label>الدور</label><select id="u-role">
        <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>مدير — صلاحيات كاملة</option>
        <option value="sales" ${u.role === 'sales' ? 'selected' : ''}>موظف مبيعات</option>
        <option value="stock" ${u.role === 'stock' ? 'selected' : ''}>موظف مخزون</option>
        <option value="viewer" ${u.role === 'viewer' ? 'selected' : ''}>عضو — عرض فقط</option>
      </select></div>
    </div>
    <div class="modal-actions"><button class="btn-gold-sm" id="u-save">💾 حفظ</button><button class="btn" id="u-cancel">إلغاء</button></div>`);
  $('#u-cancel').onclick = closeModal;
  $('#u-save').onclick = () => {
    const name = $('#u-name').value.trim(), pass = $('#u-pass').value.trim();
    if (!name || !pass) { toast('الاسم وكلمة المرور مطلوبان'); return; }
    const data = { name, username: $('#u-user').value.trim(), password: pass, role: $('#u-role').value };
    if (isNew) S.users.push({ id: uid(), ...data });
    else Object.assign(u, data);
    log(isNew ? 'إضافة مستخدم' : 'تعديل مستخدم', name); save(); closeModal(); users(); toast('تم الحفظ');
  };
}

/* ═══════════ الإعدادات ═══════════ */
function settings() {
  const st = S.settings;
  pageHTML(`
    <div class="two-col">
      <div class="section-card glass"><h3>🏢 بيانات المؤسسة</h3>
        <div class="form-grid">
          <div class="field"><label>اسم المؤسسة</label><input id="st-org" value="${esc(st.orgName)}"></div>
          <div class="field"><label>💱 اختر عملتك</label><select id="st-cur">
            <option value="ر.س" ${st.currency === 'ر.س' ? 'selected' : ''}>🇸🇦 ريال سعودي (ر.س)</option>
            <option value="$" ${st.currency === '$' ? 'selected' : ''}>🇺🇸 دولار أمريكي ($)</option>
            <option value="ر.ي ق" ${st.currency === 'ر.ي ق' ? 'selected' : ''}>🇾🇪 ريال يمني قديم (ر.ي ق)</option>
            <option value="ر.ي ج" ${st.currency === 'ر.ي ج' ? 'selected' : ''}>🇾🇪 ريال يمني / جنوب (ر.ي ج)</option>
            <option value="ج.م" ${st.currency === 'ج.م' ? 'selected' : ''}>🇪🇬 جنيه مصري (ج.م)</option>
            <option value="د.ع" ${st.currency === 'د.ع' ? 'selected' : ''}>🇮🇶 دينار عراقي (د.ع)</option>
            <option value="ر.ق" ${st.currency === 'ر.ق' ? 'selected' : ''}>🇶🇦 ريال قطري (ر.ق)</option>
          </select></div>
        </div>
      </div>
      <div class="section-card glass"><h3>🧾 إعدادات الفواتير والضرائب</h3>
        <div class="form-grid">
          <div class="field"><label>بادئة فاتورة البيع</label><input id="st-inv" value="${esc(st.invoicePrefix)}"></div>
          <div class="field"><label>بادئة فاتورة الشراء</label><input id="st-pur" value="${esc(st.purchasePrefix)}"></div>
          <div class="field"><label>نسبة الضريبة الافتراضية %</label><input id="st-tax" type="number" min="0" step="any" value="${st.taxRate}"></div>
        </div>
      </div>
    </div>
    <div class="section-card glass"><h3>🔔 إعدادات التنبيهات</h3>
      <div class="form-grid">
        <div class="field"><label>تنبيه انتهاء الصلاحية قبل (يوم)</label><input id="st-exp" type="number" min="1" value="${st.lowStockDays}"></div>
      </div>
    </div>
    <div class="section-card glass"><h3>🔑 تغيير كلمة المرور</h3>
      <div class="form-grid">
        <div class="field"><label>كلمة المرور الحالية</label><input id="st-old" type="password"></div>
        <div class="field"><label>كلمة المرور الجديدة</label><input id="st-new" type="password"></div>
      </div>
      <button class="btn" id="st-pass">تغيير كلمة المرور</button>
    </div>
    <button class="btn-gold-sm" id="st-save">💾 حفظ جميع الإعدادات</button>`);
  const applySettings = () => {
    st.orgName = $('#st-org').value.trim() || st.orgName;
    st.currency = $('#st-cur').value;
    st.invoicePrefix = $('#st-inv').value.trim() || 'INV';
    st.purchasePrefix = $('#st-pur').value.trim() || 'PUR';
    st.taxRate = +$('#st-tax').value || 0;
    st.lowStockDays = +$('#st-exp').value || 30;
    log('تعديل الإعدادات', 'العملة: ' + st.currency);
    save();
  };
  $('#st-save').onclick = () => {
    applySettings();
    toast('💾 تم حفظ الإعدادات — العملة الحالية: ' + st.currency);
    renderNav();
    go(currentPage);
  };
  // تغيير فوري للعملة لحظة اختيارها من القائمة
  $('#st-cur').onchange = () => {
    applySettings();
    toast('💱 تم تغيير العملة إلى: ' + st.currency);
    renderNav();
    go(currentPage);
  };
  $('#st-pass').onclick = () => {
    const me = S.users.find(u => u.id === S.session.id);
    if ($('#st-old').value !== me.password) { toast('كلمة المرور الحالية غير صحيحة'); return; }
    const nw = $('#st-new').value.trim();
    if (nw.length < 3) { toast('كلمة المرور الجديدة قصيرة'); return; }
    me.password = nw; save(); toast('تم تغيير كلمة المرور');
    $('#st-old').value = $('#st-new').value = '';
  };
}

/* ═══════════ النسخ الاحتياطي ═══════════ */
function backup() {
  pageHTML(`
    <div class="two-col">
      <div class="section-card glass"><h3>💾 نسخ احتياطي كامل</h3>
        <p style="margin-bottom:14px;line-height:1.9;color:var(--silver-2)">تُحفظ جميع البيانات تلقائيًا في متصفحك بعد كل عملية. يمكنك تصدير نسخة كاملة بصيغة JSON للاحتفاظ بها أو نقلها لجهاز آخر.</p>
        <div class="btn-row">
          <button class="btn-gold-sm" id="bk-export">⬇️ تصدير نسخة احتياطية</button>
          <button class="btn" id="bk-import">⬆️ استعادة من نسخة</button>
        </div>
      </div>
      <div class="section-card glass"><h3>📊 إحصائيات البيانات</h3>
        ${stat('📦', 'المنتجات', S.products.length)}
        ${stat('🏬', 'المخازن', S.warehouses.length)}
        ${stat('🛒', 'فواتير البيع', S.sales.length)}
        ${stat('📥', 'فواتير الشراء', S.purchases.length)}
        ${stat('👥', 'العملاء والموردون', S.customers.length + S.suppliers.length)}
        ${stat('🔔', 'التنبيهات النشطة', computeAlerts().length)}
      </div>
    </div>
    <div class="section-card glass" style="border-color:rgba(255,107,125,.35)"><h3>⚠️ منطقة الخطر</h3>
      <button class="btn btn-danger" id="bk-wipe">حذف جميع البيانات وإعادة التعيين</button>
    </div>`);
  $('#bk-export').onclick = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' }));
    a.download = `نسخة-احتياطية-إدارة-المخازن-${today()}.json`;
    a.click(); toast('تم تصدير النسخة الاحتياطية');
  };
  $('#bk-import').onclick = () => $('#import-file').click();
  $('#import-file').onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const data = JSON.parse(r.result);
        if (!data.products || !data.settings) throw 0;
        confirmModal('استعادة نسخة احتياطية', 'سيتم استبدال جميع البيانات الحالية بالنسخة المختارة. متابعة؟', () => {
          S = { ...defaultState(), ...data }; save(); toast('تمت الاستعادة بنجاح'); setTimeout(() => location.reload(), 800);
        });
      } catch { toast('ملف غير صالح'); }
    };
    r.readAsText(f);
    e.target.value = '';
  };
  $('#bk-wipe').onclick = () => confirmModal('إعادة تعيين كاملة', 'سيتم حذف <b>جميع</b> البيانات نهائيًا ولا يمكن التراجع. هل أنت متأكد؟', () => {
    localStorage.removeItem(LS_KEY); location.reload();
  });
}

/* ═══════════ حول النظام ═══════════ */
function about() {
  pageHTML(`
    <div class="section-card glass about-hero">
      <div class="logo-mark">👑</div>
      <h2 class="system-name" style="font-size:34px">إدارة المخازن | VIP</h2>
      <div class="vip-badge">ULTIMATE INVENTORY MANAGEMENT SYSTEM</div>
      <p style="color:var(--silver-2);max-width:560px;margin:0 auto;line-height:2">نظام إدارة مخزون متكامل بمستوى Enterprise — منتجات، مخازن متعددة، مشتريات، مبيعات، فواتير، تقارير، تنبيهات ذكية، ونسخ احتياطي. صُمم ليكون قويًا وأنيقًا وسهل الاستخدام.</p>
    </div>
    <h3 style="text-align:center;color:var(--gold-2);margin:8px 0 4px">✨ فريق التطوير</h3>
    <div class="dev-cards">
      <div class="dev-card glass"><div class="avatar">👑</div><h4>علي باناعمه</h4><p>تطوير التطبيق</p></div>
      <div class="dev-card glass"><div class="avatar">🤝</div><h4>عمر</h4><p>مساعدة في التطوير</p></div>
      <div class="dev-card glass"><div class="avatar">🤝</div><h4>عبد الكريم</h4><p>مساعدة في التطوير</p></div>
    </div>
    <div class="thanks-line">مع خالص التحيات والتقدير،<br><b>إدارة معهد جول مسحة 🌟</b></div>`);
}

/* ── استعادة الجلسة ── */
if (S.session && S.users.some(u => u.id === S.session.id && u.role === S.session.role)) {
  loginScreen.classList.add('hidden');
  startLoading();
} else {
  passInput.focus();
}

</script>
</body>
</html>