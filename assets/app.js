const MENU = [
      {id:"pizza",sq:"Pizza",en:"Pizza",tagSq:"Zgjidh shijen tënde",tagEn:"Choose your taste",sizes:["20 cm","28 cm","33 cm","40 cm"],items:[
        ["Margarita","salcë domate, guda","tomato sauce, gouda",[250,350,500,700]],
        ["Ham Classic","salcë domate, guda, proshutë","tomato sauce, gouda, ham",[300,450,600,1000]],
        ["Bacon Classic","salcë domate, guda, pancetë","tomato sauce, gouda, bacon",[300,450,600,1000]],
        ["Gustoza","salcë domate, guda, pancetë, proshutë, speca","tomato sauce, gouda, bacon, ham, peppers",[300,500,700,1100]],
        ["Napoletana","salcë domate, mozzarella, borzilok i freskët","tomato sauce, mozzarella, fresh basil",[300,400,550,800]],
        ["Capricioza","salcë domate, guda, proshutë, kërpudha, speca, ullinj","tomato sauce, gouda, ham, mushrooms, peppers, olives",[300,500,700,1200]],
        ["Speciale","salcë domate, guda, proshutë, pancetë, kërpudha, peperoni, speca","tomato sauce, gouda, ham, bacon, mushrooms, pepperoni, peppers",[300,500,700,1200]],
        ["Mexicana","salcë domate, guda, peperoni, milanez, kërpudha, speca, ullinj, domate, misër","tomato sauce, gouda, pepperoni, salami, mushrooms, peppers, olives, tomato, corn",[300,500,700,1200]],
        ["Crudo","salcë domate, guda, proshutë, pancetë, milanez, ullinj, speca","tomato sauce, gouda, prosciutto, bacon, salami, olives, peppers",[300,500,700,1200]],
        ["Arabica","djathë, guda, mozzarella, hurma arabike, mjaltë, gorgonzola","cheese, gouda, mozzarella, dates, honey, gorgonzola",[300,500,700,1200]],
        ["Vegeteriane","salcë domate, guda, kërpudha, domate, ullinj, qepë","tomato sauce, gouda, mushrooms, tomato, olives, onion",[300,450,650,1100]],
        ["4 Djathrat","salcë domate, guda, mozzarella, gorgonzola, djathë feta","tomato sauce, gouda, mozzarella, gorgonzola, feta",[300,500,700,1200]],
        ["Rucola","salcë domate, guda, pomodorini, rucola, qafë derri i tymosur, parmixhano, balsam","tomato sauce, gouda, cherry tomatoes, arugula, smoked pork neck, parmesan, balsamic",[350,600,900,1300]],
        ["Mushroom Classic","salcë domate, guda, pancetë, kërpudha, djathë feta","tomato sauce, gouda, bacon, mushrooms, feta",[300,500,700,1200]],
        ["Light","salcë domate, guda, kërpudha, fileto pule","tomato sauce, gouda, mushrooms, chicken fillet",[300,500,700,1200]],
        ["Cezar","salcë cezar, guda, pancetë, fileto pule","caesar sauce, gouda, bacon, chicken fillet",[300,500,700,1200]],
        ["Piccolino","salcë mustardë, guda, domate, fileto pule","mustard sauce, gouda, tomato, chicken fillet",[300,500,700,1200]],
        ["Nuggets","salcë domate, guda, patate, nuggets","tomato sauce, gouda, fries, nuggets",[300,500,700,1200]],
        ["Potato Bacon","salcë domate, guda, pancetë, domate, patate","tomato sauce, gouda, bacon, tomato, fries",[300,500,700,1200]],
        ["Diavola","salcë domate, guda, peperoni","tomato sauce, gouda, pepperoni",[300,500,700,1200]],
        ["Hawai","salcë domate, guda, ananas, proshutë","tomato sauce, gouda, pineapple, ham",[300,500,700,1200]],
        ["Carbonara","pana, guda, pancetë, kërpudha","cream, gouda, bacon, mushrooms",[300,500,700,1200]],
        ["Tono","salcë domate, guda, ullinj, tono","tomato sauce, gouda, olives, tuna",[300,500,700,1200]],
        ["Tartuf","kërpudhë, tartuf, mozzarella/guda","mushrooms, truffle, mozzarella/gouda",[300,500,700,1200]]
      ]},
      {id:"dolce",sq:"Dolce Vitta",en:"Dolce Vitta",tagSq:"Pizza të ëmbla",tagEn:"Sweet pizzas",sizes:["20 cm","28 cm"],noteSq:"Përgatisni picën sipas dëshirës: gjysmë të kripur, gjysmë të ëmbël!",noteEn:"Make your pizza your way — half savory, half sweet!",items:[
        ["Pizza Oreo","nutella, luleshtrydhe, banane, oreo","nutella, strawberries, banana, oreo",[300,500]],
        ["Pizza Kinder","nutella, luleshtrydhe, banane, kinder bueno","nutella, strawberries, banana, kinder bueno",[350,600]],
        ["Calzone Nutella","nutella, banane, M&M","nutella, banana, M&M","500"]
      ]},
      {id:"burgers",sq:"Burgers",en:"Burgers",tagSq:"100% viç",tagEn:"100% beef",items:[
        ["Classic Burger","salcë, sallatë jeshile, domate, qofte, guda, patate","sauce, lettuce, tomato, patty, gouda, fries","250"],
        ["Cheese Burger","salcë, kastravec turshi, pancetë, qofte, guda, patate","sauce, pickles, bacon, patty, gouda, fries","300"],
        ["Smash Burger","mish i freskët 100% viç, iceberg, domate, qepë","fresh 100% beef, iceberg, tomato, onion","400",true],
        ["Chicken Burger","salcë, sallatë jeshile, domate, guda, fileto pule, patate","sauce, lettuce, tomato, gouda, chicken fillet, fries","300"],
        ["Chicken Finger Burger","salcë, sallatë jeshile, domate, guda, chicken fingers, patate","sauce, lettuce, tomato, gouda, chicken fingers, fries","350"],
        ["Double Burger","salcë, sallatë jeshile, guda, 2 qofte, pancetë, domate, kastravec turshi, patate","sauce, lettuce, gouda, 2 patties, bacon, tomato, pickles, fries","400"],
        ["Bacon Burger","salcë, rukola, guda, 2 qofte, pancetë, vezë, patate","sauce, arugula, gouda, 2 patties, bacon, egg, fries","450"],
        ["Hangover Burger","salcë, sallatë jeshile, guda, 3 qofte, pancetë, domate, qepë, patate","sauce, lettuce, gouda, 3 patties, bacon, tomato, onion, fries","500"],
        ["Pizza Burger","brumë pize, 2 qofte, kroketa djathi, domate, kastravec turshi, patate","pizza dough, 2 patties, cheese croquettes, tomato, pickles, fries","500",true],
        ["Onion Burger","salcë, sallatë jeshile, 2 qofte, guda, turshi, onion rings, patate","sauce, lettuce, 2 patties, gouda, pickles, onion rings, fries","500",true]
      ]},
      {id:"meats",sq:"Mish",en:"Meats",tagSq:"Cilësi dhe shije",tagEn:"Quality and taste",items:[
        ["Chicken Wings","krahë pule të marinuara & të pjekura — 0.5 kg / 1 kg","marinated & roasted chicken wings — 0.5 kg / 1 kg","600 / 1200"],
        ["Chicken Fingers","mini kotoleta pule, pite, patate, salcë, domate, kastravec","mini chicken cutlets, pita, fries, sauce, tomato, cucumber","500"],
        ["Shishqebap Pule","2 shishqebap pule, pite, patate, salcë, domate, kastravec","2 chicken skewers, pita, fries, sauce, tomato, cucumber","500"],
        ["Piccolino Box","krahë pule, chicken fingers, spring rolls, onion rings, kroketa djathi, brumë me salçiçe","wings, chicken fingers, spring rolls, onion rings, cheese croquettes, sausage rolls","500 / 1000"]
      ]},
      {id:"sandwich",sq:"Sandwich",en:"Sandwich",tagSq:"Të freskëta dhe të shijshme",tagEn:"Fresh and tasty",items:[
        ["Sandwich me brumë pice","salcë, sallatë jeshile, proshutë, guda, domate","pizza-dough bread, sauce, lettuce, ham, gouda, tomato","200"],
        ["Vegetarian","djathë feta, domate, kastravec, ullinj, vaj, rigon","feta, tomato, cucumber, olives, oil, oregano","200"],
        ["Chicken","salcë, sallatë jeshile, domate, guda, chicken","sauce, lettuce, tomato, gouda, chicken","200"],
        ["Tono","salcë, sallatë jeshile, tono, domate, misër","sauce, lettuce, tuna, tomato, corn","200"],
        ["Bacon Classic","salcë, domate, pancetë, guda, vezë","sauce, tomato, bacon, gouda, egg","250"],
        ["Hungarez","salcë, sallam hungarez, domate, guda","sauce, hungarian salami, tomato, gouda","200"],
        ["Sandwich Pesto","bagetë, pesto, pomodorini, mozzarella, rucola, proshutë e tymosur","baguette, pesto, cherry tomatoes, mozzarella, arugula, smoked ham","300"],
        ["Tost","majonezë, guda, proshutë","toast — mayo, gouda, ham","100"],
        ["Tost me fileto pule","majonezë, guda, fileto pule, patate","toast — mayo, gouda, chicken fillet, fries","150"]
      ]},
      {id:"pita",sq:"Pita",en:"Pita",tagSq:"Të freskëta dhe të shijshme",tagEn:"Fresh and tasty",items:[
        ["Pita Piccolino","salcë, fileto pule, patate, domate","sauce, chicken fillet, fries, tomato","300"],
        ["Pita Arabe Chicken","salcë guda, fileto pule, patate, domate","gouda sauce, chicken fillet, fries, tomato","300"],
        ["Pita Arabe Llukanik","salcë, llukanik, patate, domate","sauce, sausage, fries, tomato","300"],
        ["Pita Pita","3 pite, fileto pule, domate, kastravec, guda — me patate dhe salcë","3 pitas, chicken fillet, tomato, cucumber, gouda — with fries and sauce","400"],
        ["Quesadilla","2 pite, fileto pule, guda, kërpudha, patate, salcë","2 pitas, chicken fillet, gouda, mushrooms, fries, sauce","300"],
        ["Souvlaki","shishqebap / fileto pule, sallatë jeshile, domate, kastravec, xaxik, patate","chicken skewer or fillet, lettuce, tomato, cucumber, tzatziki, fries","300"]
      ]},
      {id:"calzone",sq:"Calzone",en:"Calzone",tagSq:"Brumë i freskët",tagEn:"Fresh dough",noteSq:"Porositni calzonen me produktet që dëshironi.",noteEn:"Order your calzone with the fillings you love.",items:[
        ["Calzone Mozzarella","rukola, qafë derri e tymosur, mozzarella, pomodorini — 20 cm ose 28 cm","arugula, smoked pork neck, mozzarella, cherry tomatoes — 20 cm or 28 cm","500"]
      ]},
      {id:"penerli",sq:"Penerli",en:"Penerli",tagSq:"Të mbushura me përbërës cilësorë",tagEn:"Quality-filled",items:[
        ["Penerli Classic","guda & pancetë / me vezë","gouda & bacon / with egg","250 / 300"],
        ["Penerli Vegetariane","guda, kërpudha, speca, ullinj, domate","gouda, mushrooms, peppers, olives, tomato","300"],
        ["Penerli Proshutë","guda, proshutë, kërpudha, speca, ullinj","gouda, ham, mushrooms, peppers, olives","300"],
        ["Penerli 4 Djathrat","guda, mozzarella, djathë feta, gorgonzola","gouda, mozzarella, feta, gorgonzola","300"],
        ["Penerli Milanez","guda, milanez, djathë feta","gouda, milano salami, feta","300"]
      ]},
      {id:"bruschetti",sq:"Bruschetti",en:"Bruschetti",tagSq:"Shija që të kthen",tagEn:"The taste that brings you back",items:[
        ["Bruschetti me hudhër","hudhër, guda","garlic, gouda","100"],
        ["Bruschetti me hudhër dhe guda","hudhër, guda, djathë feta, pancetë dhe domate","garlic, gouda, feta, bacon and tomato","150"],
        ["Bruschetti e madhe","hudhër, guda, djathë feta, pancetë dhe domate","large — garlic, gouda, feta, bacon and tomato","200"]
      ]},
      {id:"club",sq:"Club Piccolino",en:"Club Piccolino",tagSq:"Të mbushura me cilësi",tagEn:"Stuffed with quality",items:[
        ["Club Sandwich me proshutë","guda, proshutë, pancetë — me patate & salcë","gouda, ham, bacon — with fries & sauce","300"],
        ["Club Sandwich me fileto pule","guda, fileto pule — me patate & salcë","gouda, chicken fillet — with fries & sauce","350"],
        ["Club Sandwich me proshutë gjel deti","guda, proshutë gjel deti — me patate & salcë","gouda, turkey ham — with fries & sauce","350"],
        ["Club Pizza","guda, proshutë, pancetë — me patate & salcë","gouda, ham, bacon — with fries & sauce","500"],
        ["Burrito","xaxiki, patate, marule, domate, qepë, mish derri ose pule","tzatziki, fries, lettuce, tomato, onion, pork or chicken","400"]
      ]},
      {id:"tacos",sq:"Tacos",en:"Tacos",tagSq:"Të freskëta dhe pikante",tagEn:"Fresh and spicy",items:[
        ["Tacos Pule","guacamole, iceberg, fileto pule, sweet chilli, mix","chicken — guacamole, iceberg, chicken fillet, sweet chilli, mix","500"],
        ["Tacos Viçi","mish i grirë viçi, iceberg, sos","beef — minced beef, iceberg, sauce","700"]
      ]},
      {id:"sallata",sq:"Sallata",en:"Salads",tagSq:"Të freskëta dhe të shëndetshme",tagEn:"Fresh and healthy",items:[
        ["Green Salad","sallatë jeshile, kastravec, qepë","lettuce, cucumber, onion","200"],
        ["Cezar","sallatë jeshile, fileto pule, bukë e thekur, misër, guda, salcë","lettuce, chicken fillet, croutons, corn, gouda, sauce","300"],
        ["Tono","sallatë jeshile, domate, ton, kastravec, misër, qepë, salcë","lettuce, tomato, tuna, cucumber, corn, onion, sauce","300"],
        ["Chef","sallatë jeshile, domate, kastravec, karrota, proshutë, guda, vezë, salcë","lettuce, tomato, cucumber, carrots, ham, gouda, egg, sauce","350"],
        ["Rucola","rucola, pomodorini, arra, mollë, mjaltë, balsam","arugula, cherry tomatoes, walnuts, apple, honey, balsamic","350"],
        ["Fshati","domate, kastravec, speca, ullinj, qepë, djathë feta","village salad — tomato, cucumber, peppers, olives, onion, feta","300"]
      ]},
      {id:"pasta",sq:"Pasta",en:"Pasta",tagSq:"Të freskëta dhe të shijshme",tagEn:"Fresh and tasty",items:[
        ["Linguine me salcë të kuqe","","linguine with red sauce","400"],
        ["Linguine pana, kërpudhë","","linguine with cream & mushrooms","400"],
        ["Linguine tartuf","","truffle linguine","400"]
      ]},
      {id:"sides",sq:"Side Dish",en:"Side Dish",tagSq:"Për anash",tagEn:"On the side",items:[
        ["Patate të skuqura","","french fries","200"],
        ["Racion kroketa djathi","","portion of cheese croquettes","400"],
        ["Racion onion rings","","portion of onion rings","250"]
      ]}
    ];

    const I18N = {
      sq:{
        nav_special:"Specialiteti",nav_menu:"Menu",nav_story:"Historia",nav_visit:"Na gjeni",order:"Porosit",
        hero_1:"Një herë",hero_2:"Gjithmonë Piccolino.",slogan:"“Shija që të bën të kthehesh.”",
        hero_lead:"Pizza, burger dhe fast food të përgatitura në moment — në zemër të Pedonales së Korçës.",
        see_menu:"Shiko menunë",call:"Telefono",open_daily:"Hapur çdo ditë 08:00–24:00",fresh_daily:"Brumë i freskët çdo ditë",rating:"★ 4.2 në Google",rating_v:"4.2 në Google",
        house_favorite:"Pica jonë · bërë në moment",original:"Origjinal<br>Piccolino",signature_label:"Specialiteti ynë",
        signature_copy:"Gjysmë pizza, gjysmë burger, zero kompromis. Brumë pice i pjekur në moment, dy qofte, kroketa djathi, domate dhe turshi.",
        sig_1:"Përgatitet vetëm pasi e porosit",sig_2:"Dy qofte + kroketa djathi",sig_3:"Shërbehet me patate · 500 L",try_now:"Provoje tani",
        menu_title:'Menu<span class="yellow">.</span>',menu_intro:"Zgjidh kategorinë, kërko produktin dhe telefono direkt. Çmimet janë në lekë.",
        kitchen_label:"Direkt nga kuzhina",gallery_title:'Shiko <span class="yellow">shijen.</span>',gallery_copy:"Pa foto stok. Këto janë produktet dhe kuzhina reale e Piccolino-s.",
        fresh_kitchen:"Nga kuzhina",takeaway:"Për me vete",story_label:"Historia jonë",story_1:"Kuzhinë e vogël.",story_2:"Zemër e madhe.",
        story_body:"Piccolino do të thotë “i vogli”. Një kuzhinë e vogël në Pedonalen e Korçës që fokusohet te gjërat që kanë rëndësi: brumë i freskët, përbërës të zgjedhur dhe çdo porosi e përgatitur me vëmendje.",
        come_hungry:"Eja i uritur",find_us:'Na <span class="yellow">gjeni.</span>',location:"Vendndodhja",maps:"Google Maps",hours:"Orari",
        mon_sun:"E hënë – E diel",open_everyday:"Hapur çdo ditë.",order_title:"Porosit",order_note:"Telefono ose shkruaj në WhatsApp për porosi — ose porosit në aplikacionin Foodini.",
        search:"Kërko në menu…",new:"E RE",prices:"Çmimet në lekë",no_results:"Nuk u gjet asnjë produkt.",
        menu_cta_copy:"86 produkte reale — pizza në 4 madhësi, burgera, pita, tacos dhe më shumë.",see_full_menu:"Shiko menunë e plotë",home:"Kryefaqja",
        hero_video_desc:"Nga brumi te furra — çdo picë hapet me dorë dhe përgatitet në moment."
      },
      en:{
        nav_special:"Signature",nav_menu:"Menu",nav_story:"Story",nav_visit:"Find us",order:"Order",
        hero_1:"Once",hero_2:"Always Piccolino.",slogan:"“The taste that brings you back.”",
        hero_lead:"Pizza, burgers and honest fast food made fresh when you order — in the heart of Korçë’s pedestrian street.",
        see_menu:"View menu",call:"Call",open_daily:"Open daily 08:00–24:00",fresh_daily:"Fresh dough every day",rating:"★ 4.2 on Google",rating_v:"4.2 on Google",
        house_favorite:"Our pizza · made to order",original:"Piccolino<br>Original",signature_label:"Our signature",
        signature_copy:"Half pizza, half burger, zero compromise. Fresh pizza dough, two beef patties, cheese croquettes, tomato and pickles.",
        sig_1:"Made only after you order",sig_2:"Two patties + cheese croquettes",sig_3:"Served with fries · 500 L",try_now:"Try it now",
        menu_title:'Our <span class="yellow">menu.</span>',menu_intro:"Choose a category, search an item and call directly. Prices are in Albanian lek.",
        kitchen_label:"Fresh from the kitchen",gallery_title:'See the <span class="yellow">flavor.</span>',gallery_copy:"No stock photos. This is the real Piccolino food and kitchen.",
        fresh_kitchen:"From the kitchen",takeaway:"To go",story_label:"Our story",story_1:"Small kitchen.",story_2:"Big heart.",
        story_body:"Piccolino means “the little one.” A small kitchen on Korçë’s pedestrian street focused on what matters: fresh dough, carefully chosen ingredients and every order made with attention.",
        come_hungry:"Come hungry",find_us:'Find <span class="yellow">us.</span>',location:"Location",maps:"Google Maps",hours:"Hours",
        mon_sun:"Monday – Sunday",open_everyday:"Open every day.",order_title:"Order",order_note:"Call or message us on WhatsApp to order — or order on the Foodini app.",
        search:"Search the menu…",new:"NEW",prices:"Prices in lek",no_results:"No menu items found.",
        menu_cta_copy:"86 real items — pizza in 4 sizes, burgers, pita, tacos and more.",see_full_menu:"View the full menu",home:"Home",
        hero_video_desc:"From dough to oven — every pizza is hand-stretched and made the moment you order."
      }
    };

    let lang = localStorage.getItem("piccolino-lang") || "sq";
    let activeCategory = "pizza";
    let query = "";

    const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
    const text = (key) => I18N[lang][key];

    function applyLanguage(){
      document.documentElement.lang = lang;
      document.getElementById("langBtn").textContent = lang === "sq" ? "EN" : "SQ";
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const value = text(el.dataset.i18n);
        if (value !== undefined) el.innerHTML = value;
      });
      const _ms = document.getElementById("menuSearch"); if (_ms) _ms.placeholder = text("search");
      if (document.getElementById("categoryNav")) renderCategories();
      if (document.getElementById("menuOutput")) renderMenu();
    }

    function renderCategories(){
      const nav = document.getElementById("categoryNav");
      nav.innerHTML = MENU.map(cat => `
        <button class="cat-btn ${cat.id === activeCategory ? "active" : ""}" type="button" data-cat="${cat.id}">
          ${esc(lang === "sq" ? cat.sq : cat.en)}
        </button>`).join("");
    }

    function itemMatches(cat,item){
      const hay = [cat.sq,cat.en,item[0],item[1],item[2]].join(" ").toLocaleLowerCase();
      return hay.includes(query.toLocaleLowerCase());
    }

    function renderItem(cat,item){
      const [name,sqDesc,enDesc,price,isNew] = item;
      const desc = lang === "sq" ? sqDesc : enDesc;
      const badge = isNew ? `<span class="new-pill">${text("new")}</span>` : "";
      if (Array.isArray(price)){
        const sizes = cat.sizes || [];
        return `<article class="menu-item">
          <div class="item-main">
            <div><h4 class="item-name">${esc(name)}${badge}</h4>${desc ? `<p class="item-desc">${esc(desc)}</p>` : ""}</div>
          </div>
          <div class="size-prices ${sizes.length === 2 ? "two" : ""}">
            ${sizes.map((size,i)=>`<div class="size-price"><small>${esc(size)}</small><strong>${price[i] ?? "—"} L</strong></div>`).join("")}
          </div>
        </article>`;
      }
      return `<article class="menu-item">
        <div class="item-main">
          <div><h4 class="item-name">${esc(name)}${badge}</h4>${desc ? `<p class="item-desc">${esc(desc)}</p>` : ""}</div>
          <p class="item-price">${esc(price)} L</p>
        </div>
      </article>`;
    }

    function renderMenu(){
      const output = document.getElementById("menuOutput");
      let categories;

      if(query.trim()){
        categories = MENU.map(cat => ({...cat,items:cat.items.filter(item=>itemMatches(cat,item))})).filter(cat=>cat.items.length);
      } else {
        categories = MENU.filter(cat=>cat.id === activeCategory);
      }

      if(!categories.length){
        output.innerHTML = `<div class="empty-state">${text("no_results")}</div>`;
        return;
      }

      output.innerHTML = categories.map(cat => {
        const name = lang === "sq" ? cat.sq : cat.en;
        const tag = lang === "sq" ? cat.tagSq : cat.tagEn;
        const note = lang === "sq" ? cat.noteSq : cat.noteEn;
        return `<section aria-labelledby="cat-${cat.id}">
          <div class="menu-category-head">
            <h3 class="display" id="cat-${cat.id}">${esc(name)}</h3>
            <p>${esc(tag || "")}</p>
          </div>
          ${note ? `<p class="menu-note">${esc(note)}</p>` : ""}
          <div class="menu-grid">${cat.items.map(item=>renderItem(cat,item)).join("")}</div>
          <p class="muted" style="text-align:right;margin:14px 0 36px;font-size:.75rem">${text("prices")}</p>
        </section>`;
      }).join("");
    }

const langBtn = document.getElementById("langBtn");
if (langBtn) langBtn.addEventListener("click", () => {
  lang = lang === "sq" ? "en" : "sq";
  localStorage.setItem("piccolino-lang", lang);
  applyLanguage();
});

const catNav = document.getElementById("categoryNav");
if (catNav) catNav.addEventListener("click", event => {
  const button = event.target.closest("[data-cat]");
  if (!button) return;
  activeCategory = button.dataset.cat;
  query = "";
  const s = document.getElementById("menuSearch");
  if (s) s.value = "";
  renderCategories();
  renderMenu();
  document.getElementById("menuOutput").scrollIntoView({ behavior: "smooth", block: "start" });
});

const searchEl = document.getElementById("menuSearch");
if (searchEl) searchEl.addEventListener("input", event => {
  query = event.target.value.trim();
  renderMenu();
});

const modal = document.getElementById("videoModal");
if (modal) {
  const video = document.getElementById("reelVideo");
  const openVideo = () => {
    const source = video.querySelector("source");
    if (!source.src) { source.src = source.dataset.src; video.load(); }
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    video.play().catch(() => {});
  };
  const closeVideo = () => {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    video.pause();
  };
  document.getElementById("openVideo")?.addEventListener("click", openVideo);
  document.getElementById("closeVideo")?.addEventListener("click", closeVideo);
  modal.addEventListener("click", e => { if (e.target === modal) closeVideo(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeVideo(); });
}

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Windowed playback: any video with data-start / data-cut loops inside that segment
// of the ORIGINAL file; optional data-slow-at / data-slow-rate adds slow motion.
function windowedLoop(v) {
  const start = parseFloat(v.dataset.start || "0");
  const cut = parseFloat(v.dataset.cut || "0");
  const slowAt = parseFloat(v.dataset.slowAt || "0");
  const slowRate = parseFloat(v.dataset.slowRate || "1");
  const skip = (v.dataset.skip || "").split("-").map(Number).filter(n => !isNaN(n)); // "a-b" jumps over that range
  const check = () => {
    const t = v.currentTime;
    if (skip.length === 2 && t >= skip[0] && t < skip[1]) { v.currentTime = skip[1]; return; }
    if (cut && t >= cut) { v.currentTime = start; v.playbackRate = 1; return; }
    v.playbackRate = (slowAt && t >= slowAt) ? slowRate : 1;
  };
  if (start) v.addEventListener("loadedmetadata", () => { try { v.currentTime = start; } catch (e) {} });
  v.addEventListener("timeupdate", check);
  let iv = null;
  v.addEventListener("play", () => { if (!iv) iv = setInterval(check, 120); });
  v.addEventListener("pause", () => { clearInterval(iv); iv = null; });
}

const hero = document.getElementById("heroVideo");
if (hero) {
  if (reduceMotion) { hero.removeAttribute("autoplay"); hero.pause(); }
  else { windowedLoop(hero); hero.play().catch(() => {}); }
}

// Gallery reels: fetch and play only while on screen — data stays cheap.
const reels = [...document.querySelectorAll("video.lazy-reel")];
if (reels.length && !reduceMotion) {
  reels.forEach(windowedLoop);
  const vio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      const v = en.target;
      if (en.isIntersecting) { if (!v.src) { v.src = v.dataset.src; } v.play().catch(() => {}); }
      else { v.pause(); }
    });
  }, { threshold: .25 });
  reels.forEach(v => vio.observe(v));
}

// menu.html deep links: menu.html#burgers opens that category directly
const hashCat = location.hash.replace("#", "");
if (typeof MENU !== "undefined" && MENU.some(c => c.id === hashCat)) activeCategory = hashCat;

applyLanguage();

if (hashCat && document.getElementById("menuOutput")) {
  setTimeout(() => { document.getElementById("cat-" + hashCat)?.scrollIntoView({ block: "start" }); }, 60);
}
