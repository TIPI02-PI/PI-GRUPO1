const assetPath = "/assets";

const assets = {
  dashboard: `${assetPath}/08a78.svg`,
  library: `${assetPath}/b9c59.svg`,
  route: `${assetPath}/82d5c.svg`,
  notebook: `${assetPath}/6473e.svg`,
  bookmark: `${assetPath}/7a0b0.svg`,
  users: `${assetPath}/97846.svg`,
  sprout: `${assetPath}/bf7b0.svg`,
  settings: `${assetPath}/959e7.svg`,
  help: `${assetPath}/9df79.svg`,
  search: `${assetPath}/05abd.svg`,
  compass: `${assetPath}/462eb.svg`,
  notification: `${assetPath}/586b7.svg`,
  chevron: `${assetPath}/24ac8.svg`,
  shelf: `${assetPath}/89c23.svg`,
  graduation: `${assetPath}/80888.svg`,
  chevronDown: `${assetPath}/305e3.svg`,
  filters: `${assetPath}/adefd.svg`,
  aura: `${assetPath}/5af30.svg`,
  orbit: `${assetPath}/c5cdf.svg`,
  sparkles: `${assetPath}/c2723.svg`,
  bookOpen: `${assetPath}/ea386.svg`,
  notebookPen: `${assetPath}/e3900.svg`,
  currentBook: `${assetPath}/60b38.svg`,
  pencil: `${assetPath}/dd141.svg`,
  arrowRight: `${assetPath}/7b34a.svg`,
  bookmarkPlus: `${assetPath}/b6b88.svg`,
  bookmarkCheck: `${assetPath}/64999.svg`,
  graduationLarge: `${assetPath}/3e88d.svg`,
  arrowUpRight: `${assetPath}/d13d9.svg`,
};

const navigationItems = [
  {
    label: "Meu jardim",
    icon: assets.dashboard,
    href: "#jardim",
  },
  {
    label: "Biblioteca",
    icon: assets.library,
    href: "#biblioteca",
    active: true,
  },
  {
    label: "Trilhas de estudo",
    icon: assets.route,
    href: "#trilhas",
  },
  {
    label: "Minhas anotações",
    icon: assets.notebook,
    href: "#anotacoes",
  },
  {
    label: "Obras salvas",
    icon: assets.bookmark,
    href: "#obras-salvas",
  },
  {
    label: "Comunidade",
    icon: assets.users,
    href: "#comunidade",
  },
];

const recommendedBooks = [
  {
    title: "Memórias póstumas de Brás Cubas",
    author: "Machado de Assis",
    category: "Romance · Realismo",
  },
  {
    title: "O cortiço",
    author: "Aluísio Azevedo",
    category: "Romance · Naturalismo",
  },
  {
    title: "A hora da estrela",
    author: "Clarice Lispector",
    category: "Novela · Modernismo",
    saved: true,
  },
  {
    title: "Quarto de despejo",
    author: "Carolina Maria de Jesus",
    category: "Diário · Literatura brasileira",
  },
  {
    title: "Iracema",
    author: "José de Alencar",
    category: "Romance · Romantismo",
  },
];

function NavigationItem({ label, icon, href, active }) {
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "flex h-[46px] w-full items-center gap-3 rounded-xl border px-[13px]",
        "font-['Geist:Regular'] text-sm transition-colors",
        active
          ? "border-[rgba(102,74,128,0.31)] bg-[#2d213e] font-semibold text-[#f5f1ee]"
          : "border-[#110e19] bg-[#110e19] text-[#cdb7e0] hover:bg-[#191422]",
      ].join(" ")}
    >
      <img src={icon} width="20" height="20" alt="" />

      <span className="min-w-0 flex-1 whitespace-nowrap">{label}</span>

      {active && (
        <span
          className="size-1 rounded-full bg-[#e2a838]"
          aria-hidden="true"
        />
      )}
    </a>
  );
}

function BookCard({ title, author, category, saved }) {
  return (
    <article className="flex min-w-0 flex-1 flex-col gap-3">
      <div className="relative h-12 w-full rounded-xl border border-[#30213f] bg-[#15121f]">
        <button
          type="button"
          aria-label={saved ? `${title} está salvo` : `Salvar ${title}`}
          className="absolute right-[7px] top-[7px] grid size-[29px] place-items-center rounded-lg border border-[#30213f] bg-[#1e182b]"
        >
          <img
            src={saved ? assets.bookmarkCheck : assets.bookmarkPlus}
            width="15"
            height="15"
            alt=""
          />
        </button>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="h-10 font-['Geist:SemiBold'] text-sm font-semibold leading-[1.4] text-[#f5f1ee]">
          {title}
        </h3>

        <p className="font-['Geist:Regular'] text-xs text-[#cdb7e0]">
          {author}
        </p>

        <p className="font-['Geist:Regular'] text-[10px] text-[#9c90ac]">
          {category}
        </p>
      </div>
    </article>
  );
}

export default function DLiriosBiblioteca() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#0b0b10] via-[#171120] via-[71.273%] to-[#2a1b3a] text-[#f5f1ee]">
      <div className="flex min-h-[1080px] w-full">
        {/* Barra lateral */}
        <aside className="hidden min-h-[1080px] w-[232px] shrink-0 border-r border-[#30213f] bg-[rgba(17,14,25,0.2)] px-5 pb-7 pt-8 md:flex">
          <nav
            className="flex w-full flex-col justify-between"
            aria-label="Navegação principal"
          >
            <div className="flex flex-col gap-10">
              <section className="flex flex-col gap-2">
                <p className="font-['Geist:Regular'] text-[10px] text-[#9c90ac]">
                  SEU UNIVERSO LITERÁRIO
                </p>

                {navigationItems.map((item) => (
                  <NavigationItem key={item.label} {...item} />
                ))}
              </section>

              <section className="flex flex-col gap-3">
                <p className="font-['Geist:Regular'] text-[9px] text-[#9c90ac]">
                  ONDE AS LETRAS FLORESCEM
                </p>

                <div className="flex flex-col gap-3 rounded-xl border border-[#30213f] bg-[#15121f] p-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={assets.sprout}
                      width="18"
                      height="18"
                      alt=""
                    />

                    <h2 className="font-['Geist:SemiBold'] text-xs font-semibold text-[#f5f1ee]">
                      Sua leitura floresce
                    </h2>
                  </div>

                  <p className="font-['Geist:Regular'] text-[11px] text-[#cdb7e0]">
                    3 de 8 obras concluídas
                  </p>

                  <div
                    className="h-1 w-full overflow-hidden rounded bg-[#342842]"
                    role="progressbar"
                    aria-label="Obras concluídas"
                    aria-valuemin="0"
                    aria-valuemax="8"
                    aria-valuenow="3"
                  >
                    <div className="h-full w-[37.5%] rounded bg-[#e8c67e]" />
                  </div>

                  <small className="font-['Geist:Regular'] text-[10px] text-[#9c90ac]">
                    Uma página de cada vez.
                  </small>
                </div>
              </section>
            </div>

            <footer className="flex flex-col gap-5">
              <div className="h-px w-full bg-[#30213f]" />

              <blockquote className="font-['Libre_Baskerville:Italic'] text-[13px] italic leading-[1.8] text-[#9c90ac]">
                Um refúgio onde as páginas florescem e o conhecimento cria
                raízes.
              </blockquote>

              <a
                href="#configuracoes"
                className="flex items-center gap-3 px-3 font-['Geist:Regular'] text-[13px] text-[#cdb7e0]"
              >
                <img
                  src={assets.settings}
                  width="18"
                  height="18"
                  alt=""
                />
                Configurações
              </a>

              <a
                href="#ajuda"
                className="flex items-center gap-3 px-3 font-['Geist:Regular'] text-[13px] text-[#cdb7e0]"
              >
                <img src={assets.help} width="18" height="18" alt="" />
                Ajuda e acolhimento
              </a>
            </footer>
          </nav>
        </aside>

        {/* Biblioteca */}
        <section
          id="biblioteca"
          aria-label="Biblioteca"
          className="flex min-w-0 flex-1 flex-col"
        >
          {/* Cabeçalho */}
          <header className="flex h-[88px] w-full items-center justify-between gap-5 border-b border-[#30213f] px-5 lg:px-10">
            <label className="flex h-11 min-w-0 max-w-[560px] flex-1 items-center gap-3 rounded-xl border border-[#30213f] bg-[#15121f] px-4">
              <img
                src={assets.search}
                width="19"
                height="19"
                alt=""
              />

              <input
                type="search"
                aria-label="Buscar obras e autores"
                placeholder="Busque uma obra, um autor ou uma descoberta..."
                className="min-w-0 flex-1 bg-transparent font-['Geist:Regular'] text-sm text-[#cdb7e0] outline-none placeholder:text-[#9c90ac]"
              />

              <kbd className="hidden font-['Geist:Regular'] text-xs text-[#9c90ac] sm:block">
                ⌘ K
              </kbd>
            </label>

            <div className="flex h-[38px] shrink-0 items-center gap-[11px]">
              <button
                type="button"
                aria-label="Abrir assistente"
                className="hidden size-[38px] place-items-center rounded-xl sm:grid"
              >
                <img
                  src={assets.compass}
                  width="20"
                  height="20"
                  alt=""
                />
              </button>

              <button
                type="button"
                aria-label="Abrir notificações"
                className="hidden sm:block"
              >
                <img
                  src={assets.notification}
                  width="20"
                  height="20"
                  alt=""
                />
              </button>

              <button type="button" className="flex items-center gap-3.5">
                <span className="grid size-[38px] place-items-center rounded-full border border-[#6f528b] bg-[#2d213e] font-['Libre_Baskerville:Regular'] text-[15px] text-[#e8c67e]">
                  HQ
                </span>

                <span className="hidden flex-col items-start gap-0.5 lg:flex">
                  <small className="font-['Geist:Regular'] text-[10px] text-[#9c90ac]">
                    BEM-VINDA AO JARDIM
                  </small>

                  <strong className="font-['Geist:Regular'] text-[13px] font-normal text-[#f5f1ee]">
                    Harley Quinzel
                  </strong>
                </span>

                <img
                  className="hidden lg:block"
                  src={assets.chevron}
                  width="16"
                  height="16"
                  alt=""
                />
              </button>
            </div>
          </header>

          {/* Introdução */}
          <div className="flex w-full flex-col gap-6 px-5 pb-6 pt-7 lg:px-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-2">
                <h1 className="font-['Great_Vibes:Regular'] text-[40px] leading-[1] text-[#f5f1ee]">
                  Entre páginas e descobertas
                </h1>

                <p className="font-['Geist:Regular'] text-sm text-[#cdb7e0]">
                  Sua biblioteca para ler, sentir e se preparar para o
                  vestibular.
                </p>
              </div>

              <a
                href="#estante"
                className="flex items-center gap-2 font-['Geist:Regular'] text-[13px] text-[#e8c67e]"
              >
                <img
                  src={assets.shelf}
                  width="17"
                  height="17"
                  alt=""
                />
                Minha estante
              </a>
            </div>

            <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
              <div className="flex flex-wrap gap-1.5" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected="true"
                  className="h-[38px] rounded-xl bg-[#2d213e] px-4 font-['Geist:SemiBold'] text-[13px] font-semibold"
                >
                  Todas as obras
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  className="h-[38px] rounded-xl bg-[#0b0b10] px-4 font-['Geist:Regular'] text-[13px] text-[#9c90ac]"
                >
                  Em leitura
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  className="h-[38px] rounded-xl bg-[#0b0b10] px-4 font-['Geist:Regular'] text-[13px] text-[#9c90ac]"
                >
                  Concluídas
                </button>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  className="flex h-[38px] items-center gap-2 rounded-xl border border-[#30213f] bg-[#15121f] px-3 font-['Geist:Regular'] text-xs text-[#cdb7e0]"
                >
                  <img
                    src={assets.graduation}
                    width="16"
                    height="16"
                    alt=""
                  />
                  Todos os vestibulares
                  <img
                    src={assets.chevronDown}
                    width="14"
                    height="14"
                    alt=""
                  />
                </button>

                <button
                  type="button"
                  className="flex h-[38px] items-center gap-2 rounded-xl border border-[#30213f] bg-[#15121f] px-3 font-['Geist:Regular'] text-xs text-[#cdb7e0]"
                >
                  <img
                    src={assets.filters}
                    width="16"
                    height="16"
                    alt=""
                  />
                  Todos os gêneros
                  <img
                    src={assets.chevronDown}
                    width="14"
                    height="14"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Acervo */}
          <div className="flex w-full flex-col gap-8 px-5 pb-8 lg:px-10">
            <section className="flex flex-col gap-5 xl:flex-row">
              {/* Destaque */}
              <article className="relative flex min-h-[376px] min-w-0 flex-1 overflow-hidden rounded-[20px] border border-[rgba(99,69,124,0.44)] bg-gradient-to-r from-[#39264e] to-[#191321] p-7">
                <img
                  className="absolute -top-14 left-[469px]"
                  src={assets.aura}
                  width="340"
                  height="440"
                  alt=""
                />

                <img
                  className="absolute -top-[35px] left-[493px]"
                  src={assets.orbit}
                  width="293"
                  height="398"
                  alt=""
                />

                <div className="relative z-10 flex w-full flex-col gap-[17px]">
                  <div className="flex items-center gap-[7px]">
                    <img
                      src={assets.sparkles}
                      width="15"
                      height="15"
                      alt=""
                    />

                    <span className="font-['Geist:SemiBold'] text-[10px] font-semibold text-[#e8c67e]">
                      SUA PRÓXIMA DESCOBERTA
                    </span>
                  </div>

                  <header>
                    <h2 className="font-['Great_Vibes:Regular'] text-4xl leading-[1.16] text-[#f5f1ee]">
                      Dom Casmurro
                    </h2>

                    <p className="mt-2 font-['Geist:Regular'] text-[15px] text-[#cdb7e0]">
                      Machado de Assis
                    </p>
                  </header>

                  <ul className="flex gap-2" aria-label="Categorias da obra">
                    {["Romance", "Realismo", "1899"].map((item) => (
                      <li
                        key={item}
                        className="rounded-lg bg-[rgba(205,183,224,0.07)] px-2.5 py-1 font-['Geist:Medium'] text-[11px] text-[#cdb7e0]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="max-w-[760px] font-['Geist:Regular'] text-sm leading-[1.65] text-[#cdb7e0]">
                    Entre memórias e desconfianças, Bentinho reconstrói sua
                    história com Capitu. Explore o narrador, a ironia e os
                    silêncios deste clássico brasileiro.
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e2a838] bg-[#e2a838] px-[18px] font-['Geist:SemiBold'] text-sm font-semibold text-[#17101e]"
                    >
                      <img
                        src={assets.bookOpen}
                        width="18"
                        height="18"
                        alt=""
                      />
                      Ler obra
                    </button>

                    <button
                      type="button"
                      className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#69517c] bg-[#21182e] px-[18px] font-['Geist:SemiBold'] text-sm font-semibold"
                    >
                      <img
                        src={assets.notebookPen}
                        width="18"
                        height="18"
                        alt=""
                      />
                      Guia de estudo
                    </button>
                  </div>

                  <small className="font-['Geist:Regular'] text-[11px] text-[#9c90ac]">
                    Análise literária · Contexto histórico · Questões
                  </small>
                </div>
              </article>

              {/* Leitura atual */}
              <article className="flex min-h-[376px] w-full shrink-0 flex-col gap-[19px] rounded-[20px] border border-[#30213f] bg-[#15121f] p-6 xl:w-[292px]">
                <header className="flex items-center justify-between">
                  <h2 className="font-['Geist:SemiBold'] text-[15px] font-semibold">
                    Continue sua leitura
                  </h2>

                  <img
                    src={assets.currentBook}
                    width="18"
                    height="18"
                    alt=""
                  />
                </header>

                <div>
                  <h3 className="font-['Libre_Baskerville:Regular'] text-[17px]">
                    Vidas secas
                  </h3>

                  <p className="mt-1 font-['Geist:Regular'] text-xs text-[#cdb7e0]">
                    Graciliano Ramos
                  </p>

                  <small className="font-['Geist:Regular'] text-[10px] text-[#9c90ac]">
                    Capítulo 7 · Inverno
                  </small>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['Geist:Regular'] text-xs text-[#cdb7e0]">
                      Seu progresso
                    </span>

                    <strong className="font-['Geist:SemiBold'] text-base text-[#e8c67e]">
                      54%
                    </strong>
                  </div>

                  <div
                    className="h-1.5 w-full overflow-hidden rounded-md bg-[#342842]"
                    role="progressbar"
                    aria-label="Progresso de Vidas secas"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="54"
                  >
                    <div className="h-full w-[54%] rounded-md bg-[#e2a838]" />
                  </div>

                  <small className="font-['Geist:Regular'] text-[11px] text-[#9c90ac]">
                    7 de 13 capítulos lidos
                  </small>
                </div>

                <div className="flex items-center gap-[7px]">
                  <img
                    src={assets.pencil}
                    width="14"
                    height="14"
                    alt=""
                  />

                  <span className="font-['Geist:Regular'] text-[11px] text-[#cdb7e0]">
                    12 anotações no seu caderno
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-auto flex h-[41px] w-full items-center justify-center gap-2.5 rounded-xl border border-[rgba(110,81,128,0.38)] bg-[#2d213e] font-['Geist:SemiBold'] text-[13px] font-semibold"
                >
                  Retomar leitura

                  <img
                    src={assets.arrowRight}
                    width="16"
                    height="16"
                    alt=""
                  />
                </button>
              </article>
            </section>

            {/* Recomendações */}
            <section className="flex flex-col gap-6">
              <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-[7px]">
                  <h2 className="font-['Libre_Baskerville:Regular'] text-[22px]">
                    Histórias para o seu repertório
                  </h2>

                  <p className="font-['Geist:Regular'] text-xs text-[#9c90ac]">
                    Clássicos e novas perspectivas para aprofundar seus estudos.
                  </p>
                </div>

                <a
                  href="#acervo"
                  className="flex items-center gap-2 font-['Geist:Medium'] text-xs text-[#e8c67e]"
                >
                  Explorar todas as obras

                  <img
                    src={assets.arrowRight}
                    width="16"
                    height="16"
                    alt=""
                  />
                </a>
              </header>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {recommendedBooks.map((book) => (
                  <BookCard key={book.title} {...book} />
                ))}
              </div>

              <aside className="flex flex-col gap-4 rounded-xl border border-[#30213f] bg-[#15121f] px-[22px] py-[18px] sm:flex-row sm:items-center">
                <img
                  src={assets.graduationLarge}
                  width="25"
                  height="25"
                  alt=""
                />

                <div className="min-w-0 flex-1">
                  <h3 className="font-['Geist:SemiBold'] text-[13px] font-semibold">
                    Cada vestibular, um caminho de leitura.
                  </h3>

                  <p className="mt-1 font-['Geist:Regular'] text-xs text-[#9c90ac]">
                    Organize suas obras e revisões em trilhas para Fuvest,
                    Unicamp, Unesp e Enem.
                  </p>
                </div>

                <a
                  href="#trilhas"
                  className="flex shrink-0 items-center gap-2 font-['Geist:Regular'] text-xs text-[#e8c67e]"
                >
                  Conhecer as trilhas

                  <img
                    src={assets.arrowUpRight}
                    width="16"
                    height="16"
                    alt=""
                  />
                </a>
              </aside>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}