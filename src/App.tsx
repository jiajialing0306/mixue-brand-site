const products = [
  {
    name: '冰鲜柠檬水',
    tag: '热到没脾气就点它',
    line: '酸甜够醒，冰感够直接。不是装精致，是一口把温度打下来。',
    tone: 'lemon',
  },
  {
    name: '新鲜冰淇淋',
    tag: '逛街续命小道具',
    line: '不用做攻略，不用等仪式感。想吃甜的那一秒，它就能到手。',
    tone: 'cream',
  },
  {
    name: '草莓摇摇奶昔',
    tag: '拍照前先摇一摇',
    line: '粉色、果香、奶昔感都在线。适合嘴馋，也适合发一条今天很甜。',
    tone: 'berry',
  },
  {
    name: '茉莉奶绿',
    tag: '不想太甜选这杯',
    line: '茶香轻一点，奶感顺一点。上班、逛街、饭后都不容易腻。',
    tone: 'jasmine',
  },
  {
    name: '雪王雪顶咖啡',
    tag: '咖啡也要有甜头',
    line: '想提神，又不想苦着脸。雪顶一盖，咖啡直接变好哄。',
    tone: 'coffee',
  },
];

const advantages = [
  ['平价', '不是降低期待，而是把快乐变成日常消费。'],
  ['清爽', '夏天不需要复杂叙事，一杯冰柠檬水就够直接。'],
  ['高频', '门店密度、爆款单品、亲民价格一起拉高复购。'],
  ['好记', '红白门头、雪王和高频爆款，一眼就能在街上被认出来。'],
];

const brandNotes = [
  '价格友好，但不是将就；是把解暑这件事做得更轻松。',
  '产品不绕弯，想喝什么一眼能懂，点单没有阅读压力。',
  '门店像城市里的补给点，逛街、通勤、饭后都能顺手遇见。',
  '雪王负责记忆点，饮品负责复购，品牌负责把快乐变日常。',
];

const brandCards = [
  ['价格不刺客', '想喝就买，不用先做心理建设。蜜雪把快乐做成了日常款。'],
  ['爆款不绕弯', '柠檬水、冰淇淋、奶绿，名字一听就懂，点单不费脑。'],
  ['门店像补给站', '热了、渴了、逛累了，看到红白门头就知道可以补一口。'],
];

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      雪
    </span>
  );
}

function SnowKingImage({ className = '' }: { className?: string }) {
  return (
    <img
      src="/snowking.png"
      alt="蜜雪冰城吉祥物雪王"
      className={`snowking-image ${className}`}
    />
  );
}

function Navbar() {
  return (
    <header className="site-header fixed left-0 right-0 top-0 px-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-0 py-3 text-[#d90416] md:px-0">
        <a href="#" className="flex items-center gap-3">
          <LogoMark />
          <span className="text-base font-black tracking-tight md:text-lg">
            蜜雪冰城
          </span>
        </a>
        <div className="ml-auto hidden items-center gap-1 text-sm font-bold md:flex">
          <a className="px-3 py-2 hover:bg-[#d90416] hover:text-white lg:px-4" href="#ip">
            雪王ip
          </a>
          <a
            className="px-3 py-2 hover:bg-[#d90416] hover:text-white lg:px-4"
            href="#products"
          >
            爆款商品
          </a>
          <a
            className="px-3 py-2 hover:bg-[#d90416] hover:text-white lg:px-4"
            href="#compare"
          >
            品牌优势
          </a>
          <a
            className="px-3 py-2 hover:bg-[#d90416] hover:text-white lg:px-4"
            href="#brand"
          >
            品牌态度
          </a>
          <a
            className="px-3 py-2 hover:bg-[#d90416] hover:text-white lg:px-4"
            href="#creator"
          >
            创作者
          </a>
        </div>
        <a
          className="bg-[#d90416] px-4 py-2.5 text-sm font-black text-white shadow-[0_12px_32px_rgba(217,4,22,0.22)] hover:bg-[#b90012]"
          href="#products"
        >
          看夏日爆款
        </a>
      </nav>
    </header>
  );
}

function CreatorFooter() {
  return (
    <footer id="creator" className="creator-footer relative overflow-hidden px-5 py-8 md:px-8">
      <div className="creator-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-black tracking-[0.24em] text-[#d90416]/70">
            creator credit
          </p>
          <h2 className="mt-2 text-2xl font-black leading-none text-[#26070c] md:text-3xl">
            作者
            加加灵
          </h2>
        </div>

        <div className="creator-panel">
          <div className="creator-badge">
            <span>抖音</span>
            <strong>bottleAI</strong>
          </div>
          <p className="creator-line">
            关注加加灵，继续看更多 AI 创意设计和品牌页面玩法。
          </p>
        </div>
      </div>
    </footer>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <article className={`product-card product-${product.tone}`}>
      <div className="product-copy">
        <p className="product-index">0{index + 1}</p>
        <p className="product-tag">{product.tag}</p>
        <h3>{product.name}</h3>
      </div>

      <div className="drink-scene" aria-hidden="true">
        <span className="straw" />
        <span className="ice ice-a" />
        <span className="ice ice-b" />
        <span className="ice ice-c" />
        <div className="cup">
          <span className="cup-lid" />
          <span className="cup-shine" />
          <span className="cup-texture" />
          <span className="ingredient ingredient-one" />
          <span className="ingredient ingredient-two" />
          <span className="drink-fill" />
        </div>
      </div>

      <div className="product-wave-copy">
        <p>{product.line}</p>
      </div>
    </article>
  );
}

function Hero() {
  return (
    <section className="hero-section relative min-h-screen overflow-hidden bg-[#f8fbff] text-[#26070c]">
      <div className="cinema-bg absolute inset-0" />
      <div className="ice-lines absolute inset-0" />
      <Navbar />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-20 pt-28 md:grid-cols-[0.96fr_1.04fr] md:px-8 md:pb-16 md:pt-24">
        <div className="relative">
          <p className="inline-flex border border-[#d90416]/20 bg-white/64 px-4 py-2 text-sm font-black tracking-[0.18em] text-[#d90416] backdrop-blur">
            Mixue Ice Cream & Tea Summer Brand Site
          </p>
          <h1 className="hero-title mt-7 text-[18vw] font-black leading-[0.86] tracking-[-0.1em] text-[#d90416] md:text-[8.8vw]">
            蜜雪
            <br />
            冰城
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-black leading-snug text-[#26070c] md:text-4xl">
            雪王把夏天调成冰爽模式。
          </p>
          <p className="mt-5 max-w-xl text-base font-bold leading-relaxed text-[#6f333b] md:text-lg">
            夏天最怕又热又渴还纠结。蜜雪冰城把选择题变成送分题：
            想降温点柠檬水，想解馋拿冰淇淋，不用攻略，快乐直接到账。
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-3 border border-[#d90416]/15 bg-white/60 text-center backdrop-blur md:text-left">
            <div className="border-r border-[#d90416]/15 p-4">
              <p className="text-2xl font-black text-[#d90416]">平价</p>
              <p className="mt-1 text-xs font-bold text-[#7a4047]">高频快乐</p>
            </div>
            <div className="border-r border-[#d90416]/15 p-4">
              <p className="text-2xl font-black text-[#d90416]">冰爽</p>
              <p className="mt-1 text-xs font-bold text-[#7a4047]">夏日主场</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-black text-[#d90416]">好找</p>
              <p className="mt-1 text-xs font-bold text-[#7a4047]">城市补给</p>
            </div>
          </div>
        </div>

        <div className="stage relative min-h-[520px] md:min-h-[680px]">
          <div className="stage-orbit orbit-one" />
          <div className="stage-orbit orbit-two" />
          <div className="stage-card">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d90416]/70">
              snow king
            </p>
            <p className="mt-2 text-3xl font-black text-[#d90416]">
              夏天交给雪王
            </p>
          </div>
          <SnowKingImage className="hero-snowking" />
          <div className="summer-tag tag-lemon">冰鲜柠檬水</div>
          <div className="summer-tag tag-cream">新鲜冰淇淋</div>
          <div className="summer-tag tag-song">快乐不用等</div>
        </div>
      </div>

      <div className="ticker absolute bottom-0 left-0 right-0 z-20 border-y border-[#d90416]/15 bg-white/86 py-3 text-[#d90416] backdrop-blur">
        <div className="ticker-track text-lg font-black md:text-2xl">
          <span>
            冰鲜柠檬水 · 新鲜冰淇淋 · 草莓摇摇奶昔 · 茉莉奶绿 ·
            雪王雪顶咖啡 · 高质平价 · 夏日补给站 ·
          </span>
          <span>
            冰鲜柠檬水 · 新鲜冰淇淋 · 草莓摇摇奶昔 · 茉莉奶绿 ·
            雪王雪顶咖啡 · 高质平价 · 夏日补给站 ·
          </span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#26070c]">
      <Hero />

      <section id="products" className="relative overflow-hidden px-5 py-24 md:px-8">
        <div className="section-wash absolute inset-0" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-end">
            <div>
              <p className="text-sm font-black tracking-[0.24em] text-[#d90416]">
                summer bestsellers
              </p>
              <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#d90416] md:text-7xl">
                夏日爆款，
                <br />
                不用解释。
              </h2>
            </div>
            <p className="max-w-xl text-lg font-bold leading-relaxed text-[#6f333b]">
              热到不想排队、不想算满减、不想研究小料？蜜雪冰城的爽点很直给：
              价格不刺客，爆款不费脑，点完就能把夏天的烦躁压下去。
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {products.map((product, index) => (
              <ProductCard product={product} index={index} key={product.name} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="ip"
        className="relative grid min-h-screen overflow-hidden bg-[#d90416] text-white md:grid-cols-[1fr_1fr]"
      >
        <div className="brand-motion absolute inset-0" />
        <div className="relative min-h-[560px] overflow-hidden">
          <SnowKingImage className="ip-snowking" />
        </div>
        <div className="relative flex flex-col justify-center px-5 py-24 md:px-14">
          <p className="text-sm font-black tracking-[0.24em] text-[#bdf1ff]">
            Mixue Ice Cream & Tea Brand Story
          </p>
          <h2 className="mt-4 text-5xl font-black leading-[1.02] tracking-[-0.06em] md:text-8xl">
            蜜雪冰城，
            <br />
            是夏天的快乐补给站。
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-bold leading-relaxed text-white/84 md:text-xl">
            它不跟你绕复杂茶底，也不把一杯饮料讲成论文。
            热了、渴了、嘴馋了，路边看到那抹红白，就知道今天的快乐可以很快到账。
          </p>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {brandCards.map(([title, text]) => (
              <div
                className="ip-card border border-white/28 bg-white/10 p-5 backdrop-blur"
                key={title}
              >
                <p className="text-2xl font-black">{title}</p>
                <p className="mt-3 text-sm font-bold leading-relaxed text-white/72">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="compare"
        className="compare-section relative overflow-hidden px-5 py-24 md:px-8"
      >
        <div className="compare-fizz compare-fizz-one" aria-hidden="true" />
        <div className="compare-fizz compare-fizz-two" aria-hidden="true" />
        <div className="compare-ice compare-ice-one" aria-hidden="true" />
        <div className="compare-ice compare-ice-two" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div className="compare-head">
              <p className="text-sm font-black tracking-[0.24em] text-[#d90416]">
                Why Mixue Ice Cream & Tea
              </p>
              <h2 className="mt-4 text-5xl font-black leading-[0.98] tracking-[-0.06em] md:text-7xl">
                比起“精致选择”，
                <br />
                蜜雪更像
                <br />
                夏日答案。
              </h2>
            </div>
            <div className="advantage-stack grid gap-4">
              {advantages.map(([title, text], index) => (
                <div
                  className="advantage-row"
                  key={title}
                >
                  <span className="advantage-number">0{index + 1}</span>
                  <div className="advantage-copy">
                    <p className="advantage-title">{title}</p>
                    <p className="advantage-text">{text}</p>
                  </div>
                  <span className="advantage-cube" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="brand"
        className="relative overflow-hidden bg-[#111316] px-5 py-24 text-white md:px-8"
      >
        <div className="brand-light absolute inset-0" />
        <div className="brand-refreshers absolute inset-0" aria-hidden="true">
          <span className="refresh-lemon refresh-lemon-one" />
          <span className="refresh-lemon refresh-lemon-two" />
          <span className="refresh-ice refresh-ice-one" />
          <span className="refresh-ice refresh-ice-two" />
          <span className="refresh-ice refresh-ice-three" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-black tracking-[0.24em] text-[#bdf1ff]">
            brand attitude
          </p>
          <h2 className="mt-4 text-5xl font-black leading-[1] tracking-[-0.06em] md:text-8xl">
            好喝不必端着，
            <br />
            快乐不用很贵。
          </h2>
          <div className="mt-12 grid gap-3 md:grid-cols-4">
            {brandNotes.map((note, index) => (
              <div
                className="attitude-card border border-white/14 bg-white/[0.07] p-5 backdrop-blur"
                key={note}
              >
                <span className="attitude-number">0{index + 1}</span>
                <p className="text-2xl font-black leading-tight">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CreatorFooter />
    </main>
  );
}
