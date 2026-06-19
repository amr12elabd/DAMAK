/* ═══════════════════════════════════════════════════════════════
   DAMAK Product Catalogue Data — 61 products
   Categories: soil | micro | biostim | pgr | dormancy | fertilizer | pesticide
═══════════════════════════════════════════════════════════════ */

var DAMAK_CATEGORIES = [
  { key: 'all',        en: 'All Products',        ar: 'جميع المنتجات' },
  { key: 'pgr',        en: 'Growth Regulators',   ar: 'منظمات النمو' },
  { key: 'soil',       en: 'Soil Conditioners',   ar: 'محسنات التربة' },
  { key: 'micro',      en: 'Micronutrients',       ar: 'عناصر صغرى' },
  { key: 'biostim',    en: 'Biostimulants',        ar: 'محفزات النمو' },
  { key: 'dormancy',   en: 'Dormancy Breakers',    ar: 'كاسرات السكون' },
  { key: 'fertilizer', en: 'Fertilizers',          ar: 'الأسمدة' },
  { key: 'pesticide',  en: 'Pesticides',           ar: 'المبيدات' }
];

var DAMAK_PRODUCTS = [

  /* ── SOIL CONDITIONERS (6) ── */
  {
    id: 'supra', cat: 'soil',
    nameEn: 'Supra', nameAr: 'سوبرا',
    descEn: 'Granular humic acid that improves soil structure, increases cation exchange capacity, and boosts nutrient absorption. Ideal for sandy and clay soils.',
    descAr: 'الحل الأمثل لتحسين خواص التربة وزيادة إمتصاص العناصر الغذائية. مثالي للتربة الرملية والطينية.',
    compEn: 'Humic Acid 84%, Potassium (Potassium Humate) 1%',
    compAr: 'هيوميك أسيد 84٪، بوتاسيوم (هيومات بوتاسيوم) 1٪',
    formEn: 'Granules', formAr: 'حبيبات'
  },
  {
    id: 'homco', cat: 'soil',
    nameEn: 'Homco', nameAr: 'هومكو',
    descEn: 'Pelleted humic acid with potassium humate for improving soil CEC and promoting better nutrient uptake across all soil types.',
    descAr: 'الحل الأمثل لتحسين خواص التربة وزيادة إمتصاص العناصر. يحسن القدرة التبادلية للتربة ويعزز امتصاص العناصر الغذائية.',
    compEn: 'Humic Acid 84%, Potassium (Potassium Humate) 1%',
    compAr: 'هيوميك أسيد 84٪، بوتاسيوم (هيومات بوتاسيوم) 1٪',
    formEn: 'Pellets', formAr: 'تيلس'
  },
  {
    id: 'fulvate-100', cat: 'soil',
    nameEn: 'Fulvate 100', nameAr: 'فلفات 100',
    descEn: 'High-concentration fulvic acid complex that improves nutrient mobilisation, root activation, and soil water retention.',
    descAr: 'الحل الأمثل لتحسين خواص التربة وزيادة امتصاص العناصر وتنشيط الجذور. محتوى عالٍ من حمض الفولفيك.',
    compEn: 'Fulvic Acid 70%, Potassium (Potassium Fulvate) 1%',
    compAr: 'فولفيك أسيد 70٪، بوتاسيوم (فلفات بوتاسيوم) 1٪',
    formEn: 'Liters', formAr: 'ليترات'
  },
  {
    id: 'bota-fulvic', cat: 'soil',
    nameEn: 'Bota Fulvic', nameAr: 'بوتا فولفيك',
    descEn: 'Pelleted fulvic acid for soil application — improves soil nutrient availability, enhances root development, and increases fertiliser efficiency.',
    descAr: 'الحل الأمثل لتحسين خواص التربة وإمتصاص العناصر وتنشيط الجذور. صيغة حبيبية لسهولة التطبيق.',
    compEn: 'Fulvic Acid 70%, Potassium (Potassium Fulvate) 1%',
    compAr: 'فولفيك أسيد 70٪، بوتاسيوم (فولفات بوتاسيوم) 1٪',
    formEn: 'Pellets', formAr: 'تيلس'
  },
  {
    id: 'calivit', cat: 'soil',
    nameEn: 'Calivit', nameAr: 'كاليفيت',
    descEn: 'Salinity treater — calcium-based formula that protects plants from sodium toxicity, corrects salt damage, and restores normal physiological function in irrigated fields.',
    descAr: 'الحل الأمثل لحماية النبات من التأثير الضار للملوحة. يحتوي على أحماض كربوكسيلية تُعالج ملوحة التربة وتحمي جذور النبات.',
    compEn: 'Calcium (CaO) 14.5%, Polyhydroxy Carboxylic Acids',
    compAr: 'كالسيوم Ca(O) 14.5٪، أحماض كربوكسيلية (polyhydroxy carboxylic acids)',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'salty-out-sc', cat: 'soil',
    nameEn: 'Salty Out SC', nameAr: 'سولتي أوت SC',
    descEn: 'Concentrated suspension concentrate for treating soil and irrigation water salinity. Polyhydroxy carboxylic acids precipitate and displace sodium ions, restoring soil permeability.',
    descAr: 'الحل الأمثل لحماية النبات من التأثير الضار للملوحة. يحتوي على مواد عضوية فعّالة تُزيل الصوديوم الضار وتُعيد حيوية التربة.',
    compEn: 'Calcium (CaO) 14%, Polyhydroxy Carboxylic Acids 22%, Organic Matter 22%, Other additives',
    compAr: 'كالسيوم (CaO) 14٪، أحماض كربوكسيلية 22٪، مواد عضوية 22٪، إضافات أخرى',
    formEn: 'Suspension Concentrate (SC)', formAr: 'مستحلب مركّز (SC)'
  },

  /* ── CHELATED MICRONUTRIENTS (7) ── */
  {
    id: 'micro-king', cat: 'micro',
    nameEn: 'Micro King', nameAr: 'ميكرو كينج',
    descEn: 'Complete fully-chelated micronutrient package containing all six key trace elements. Fully water-soluble for fast foliar or fertigation delivery.',
    descAr: 'الأفضل على الإطلاق في العناصر الصغرى المخلبية كليًّا — سريعة الذوبان والامتصاص. يحتوي على جميع العناصر الصغرى المهمة.',
    compEn: 'Zn 4%, Fe(EDTA) 7.4%, Mn(EDTA) 2.5%, Cu(EDTA) 1.25%, B 0.58%, Mo 0.35%',
    compAr: 'زنك 4٪، حديد (Fe+EDTA) 7.4٪، مانجنيز (Mn+EDTA) 2.5٪، نحاس (Cu+EDTA) 1.25٪، بورون 0.58٪، موليبدنيوم 0.35٪',
    formEn: 'Water-Soluble Powder', formAr: 'مسحوق قابل للذوبان'
  },
  {
    id: 'mac-calcium', cat: 'micro',
    nameEn: 'Mac Calcium', nameAr: 'ماك كالسيوم',
    descEn: 'Fast-dissolving chelated calcium for correcting deficiency symptoms including blossom end rot, fruit cracking, and tip burn. Fully water-soluble.',
    descAr: 'الأفضل لعلاج أعراض نقص الكالسيوم. مركب سريع الذوبان والانتشار في الماء لسرعة الامتصاص والتأثير.',
    compEn: 'Calcium (Ca+EDTA, chelated) 1%, EDTA 74%',
    compAr: 'كالسيوم مخلبي (Ca+EDTA) 1٪، مادة مخلبية (EDTA) 74٪',
    formEn: 'Water-Soluble Powder', formAr: 'مسحوق قابل للذوبان'
  },
  {
    id: 'mac-magnesium', cat: 'micro',
    nameEn: 'Mac Magnesium', nameAr: 'ماك مغنيسيوم',
    descEn: 'Rapidly soluble chelated magnesium for correcting Mg deficiency and improving chlorophyll production. Fast systemic uptake via foliar or drip application.',
    descAr: 'الأفضل لعلاج أعراض نقص المغنيسيوم. مركب سريع الذوبان والانتشار في الماء يُسهم في تحسين إنتاج الكلوروفيل.',
    compEn: 'Magnesium (Mg+EDTA, chelated) 6%, EDTA 72%',
    compAr: 'مغنيسيوم مخلبي (Mg+EDTA) 6٪، مادة مخلبية (EDTA) 72٪',
    formEn: 'Water-Soluble Powder', formAr: 'مسحوق قابل للذوبان'
  },
  {
    id: 'mac-manganese', cat: 'micro',
    nameEn: 'Mac Manganese', nameAr: 'ماك منجنيز',
    descEn: 'Soluble chelated manganese for correcting deficiency symptoms and supporting enzyme activity in photosynthesis and nitrogen metabolism.',
    descAr: 'الأفضل لعلاج أعراض نقص المنجنيز. مركب سريع الذوبان يُحفّز نشاط الإنزيمات ويُعزز التمثيل الضوئي.',
    compEn: 'Manganese (Mn+EDTA, chelated) 4%, EDTA 19%',
    compAr: 'منجنيز مخلبي (Mn+EDTA) 4٪، مادة مخلبية (EDTA) 19٪',
    formEn: 'Water-Soluble Powder', formAr: 'مسحوق قابل للذوبان'
  },
  {
    id: 'zincomag-manganese', cat: 'micro',
    nameEn: 'Zincomag-Manganese', nameAr: 'زنكوماغ-منجنيز',
    descEn: 'Triple-action micronutrient blend (Zn + Mn + Mg) for comprehensive foliar nutrition and simultaneous correction of multiple deficiencies.',
    descAr: 'الاختيار الأمثل للتغذية النباتية وعلاج أعراض نقص الزنك والمنجنيز والماغنيسيوم في النبات في مرحلة واحدة.',
    compEn: 'Zn (acetate) 6%, Mn (EDTA) 4%, Mg (MgO/acetate) 8%, Chelating agent 74.98%',
    compAr: 'زنك (أسيتات) 6٪، منجنيز (EDTA) 4٪، ماغنيسيوم (MgO أسيتات) 8٪، مادة مخلبية 74.98٪',
    formEn: 'Water-Soluble Powder', formAr: 'مسحوق قابل للذوبان'
  },
  {
    id: 'b-m-extra', cat: 'micro',
    nameEn: 'B-M Extra', nameAr: 'بي-أم-اكسترا',
    descEn: 'Boron, zinc, and molybdenum complex for improving pollination success, fruit set, and reproductive growth. Prevents deficiency-related fruit drop.',
    descAr: 'الأفضل في تحسين التزهير والعقد وعلاج أعراض نقص الزنك والبورون والموليبدنيوم دفعةً واحدة.',
    compEn: 'Zn (acetate) 2%, B (ethanolamine complex) 6%, Mo (sodium molybdate) 4%',
    compAr: 'زنك (أسيتات) 2٪، بورون (إيثانول أمين) 6٪، موليبدنيوم (موليبدات صوديوم) 4٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'super-b-m', cat: 'micro',
    nameEn: 'Super B-M', nameAr: 'سوبر بي-أم',
    descEn: 'High-concentration boron and molybdenum for correcting deficiencies in root crops, bulbing vegetables, and crops with high reproductive demands.',
    descAr: 'الأفضل في تضخيم المحاصيل الدرنية وتصحيح أعراض نقص البورون والموليبدنيوم بتركيزات عالية وفعّالة.',
    compEn: 'Boron (B) 10.74%, Molybdenum (Mo) 4%',
    compAr: 'بورون (B) 10.74٪، موليبدنيوم (Mo) 4٪',
    formEn: 'Water-Soluble Powder', formAr: 'مسحوق قابل للذوبان'
  },

  /* ── BIOSTIMULANTS / AMINO ACIDS (12) ── */
  {
    id: 'amino-west', cat: 'biostim',
    nameEn: 'Amino West', nameAr: 'أمينو ويست',
    descEn: 'Amino acid and micronutrient blend with mannitol for improving flowering, fruit set, and tolerance to abiotic stress such as heat, drought, and salinity.',
    descAr: 'الأفضل في تحسين التزهير والعقد ورفع الإجهاد. يحتوي على أحماض أمينية نباتية وسكريات كحولية (مانيتول) لتقوية النبات.',
    compEn: 'Zn-EDTA 4%, B (ethanolamine) 6%, EDTA 18.5%, Plant Amino Acids (Glycine 0.4%, Proline 0.5%), Mannitol 5%',
    compAr: 'زنك EDTA 4٪، بورون (إيثانول أمين) 6٪، EDTA 18.5٪، أحماض أمينية نباتية (جليسين 0.4٪، بولين 0.5٪)، مانيتول 5٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'grant', cat: 'biostim',
    nameEn: 'Grant', nameAr: 'جرنت',
    descEn: 'High-quality free amino acid formula with fulvic acid and trace elements. Boosts protein synthesis, improves crop quality, and enhances stress recovery.',
    descAr: 'قوة الأحماض الأمينية عالية الجودة. يحتوي على أحماض أمينية حرة وفولفيك أسيد وعناصر صغرى لتغذية متكاملة.',
    compEn: 'Free Amino Acids 11%, Fulvic Acid 4%, Micronutrients 2%',
    compAr: 'أحماض أمينية حرة 11٪، فولفيك أسيد 4٪، عناصر صغرى 2٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'minx', cat: 'biostim',
    nameEn: 'Minx', nameAr: 'مينكس',
    descEn: 'Organic acid and micronutrient complex for comprehensive plant nutrition. Fulvic acid carrier enhances trace element availability and uptake efficiency.',
    descAr: 'قوة الأحماض العضوية مع العناصر الصغرى في تغذية النبات. يُعزز الفولفيك أسيد امتصاص العناصر الصغرى ويرفع كفاءتها.',
    compEn: 'Fulvic Acid 20%, Micronutrients 5%',
    compAr: 'فولفيك أسيد 20٪، عناصر صغرى 5٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'b-scale', cat: 'biostim',
    nameEn: 'B-Scale', nameAr: 'بي-سكال',
    descEn: 'Phosphorus and potassium complex for activating plant defence mechanisms against fungal diseases and boosting resistance to environmental stress.',
    descAr: 'الاختيار الأمثل للتغذية النباتية ورفع المقاومة المستحثة ضد الأمراض الفطرية والإجهادات البيئية المختلفة.',
    compEn: 'Phosphorus 30%, Potassium 20%',
    compAr: 'فوسفور 30٪، بوتاسيوم 20٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'camery', cat: 'biostim',
    nameEn: 'Camery', nameAr: 'كاميري',
    descEn: 'Organic potassium (potassium gluconate) with L-amino acids — the most bioavailable form of potassium for correcting deficiency and maximising fruit enlargement and weight.',
    descAr: 'المعنى الحقيقي لقوة البوتاسيوم العضوي. الاختيار الأمثل لتعويض نقص عنصر البوتاسيوم وزيادة تضخيم الثمار وتحسين جودتها.',
    compEn: 'Potassium Gluconate (K) 20.76%, L-Amino Acids 2.5%',
    compAr: 'بوتاسيوم (Potassium Gluconate) K 20.76٪، L-أحماض أمينية 2.5٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'delta-gluco-k', cat: 'biostim',
    nameEn: 'Delta Gluco-K', nameAr: 'دلتا جلوكو-ك',
    descEn: 'Organic potassium complex for soil application. The strongest potassium enlargement, colouring, and hardening compound — for high-quality post-harvest presentation.',
    descAr: 'قوة البوتاسيوم العضوي في التسميد الأرضي — الأقوى والأسرع في التضخيم والتلوين والصلابة. لجودة ثمار عالية ومواصفات تصدير ممتازة.',
    compEn: 'Potassium (K₂O, bicarboxylates) 20%, Biocarboxylic Acids 6%',
    compAr: 'بوتاسيوم (K₂O) 20٪، أحماض بيوكربوكسيلية 6٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'mystic', cat: 'biostim',
    nameEn: 'Mystic', nameAr: 'مايستك',
    descEn: 'Fully chelated complete micronutrient blend. Contains zinc, iron, manganese, and copper alongside citric acid for preventing and correcting simultaneous multi-element deficiencies.',
    descAr: 'الأفضل على الإطلاق — خليط من العناصر الصغرى المخلبية كليًّا لعلاج نقص متعدد العناصر في خطوة واحدة.',
    compEn: 'Zn 7%, Fe 7.5%, Mn 4.3%, EDTA 61.94%, Citric Acid 3%, Cu 7%',
    compAr: 'زنك 7٪، حديد 7.5٪، منجنيز 4.3٪، EDTA 61.94٪، حامض سيتريك 3٪، نحاس 7٪',
    formEn: 'Water-Soluble Powder', formAr: 'مسحوق قابل للذوبان'
  },
  {
    id: 'tree-d', cat: 'biostim',
    nameEn: 'Tree D', nameAr: 'تري دي',
    descEn: 'Premium marine algae extract with natural cytokinins, gibberellins, alginic acid, mannitol, and amino acids. Comprehensive plant nutrition and vigour enhancement.',
    descAr: 'مستخلص طحالب بحرية عالي الجودة — الأفضل لتغذية النبات. يحتوي على جينك أسيد وسيتوكينين وجبريلين وأحماض أمينية ومانيتول.',
    compEn: 'Alginic Acid 16%, K 4%, Mannitol 4%, Amino Acids 4%, Cytokinin + Gibberellin 60ppm',
    compAr: 'الجينك أسيد 16٪، بوتاسيوم 4٪، مانيتول 4٪، أحماض أمينية 4٪، سيتوكينين + جبريلين 60 PPM',
    formEn: 'Water-Soluble Powder (Marine Algae)', formAr: 'مسحوق قابل للذوبان (طحالب بحرية)'
  },
  {
    id: 'donix', cat: 'biostim',
    nameEn: 'Donix', nameAr: 'دونيكس',
    descEn: 'Fully water-soluble premium seaweed extract with natural plant hormones. Fast-dissolving formula for convenient foliar or fertigation application.',
    descAr: 'مستخلص طحالب بحرية عالي الجودة تام الذوبان — الأفضل لتغذية النبات. سريع الذوبان مع محتوى عالٍ من المحرّضات الطبيعية للنمو.',
    compEn: 'Alginic Acid 15.5%, K 4%, Mannitol 2%, Amino Acids 4%, Cytokinin + Gibberellin 60ppm',
    compAr: 'الجينك أسيد 15.5٪، بوتاسيوم 4٪، مانيتول 2٪، أحماض أمينية 4٪، سيتوكينين + جبريلين 60 PPM',
    formEn: 'Water-Soluble Powder (Marine Algae)', formAr: 'مسحوق قابل للذوبان (طحالب بحرية)'
  },
  {
    id: 'algamax-te', cat: 'biostim',
    nameEn: 'Algamax TE', nameAr: 'الجماكس تي أي',
    descEn: 'Ecklonia maxima seaweed extract enriched with chelated micronutrients. Natural auxins and cytokinins from kelp support root development, flowering, and stress resilience.',
    descAr: 'مستخلص طحالب بحرية (Ecklonia maxima) ذو محتوى عالٍ من الأوكسينات والسيتوكينينات الطبيعية — مدعّم بالعناصر الصغرى المخلبية.',
    compEn: 'Zn 5%, Mn(EDTA) 9.91%, Fe(EDTA) 4.7%, B 5%, Mo 9.5%, Kelp Extract (Ecklonia maxima)',
    compAr: 'زنك 5٪، منجنيز (EDTA) 9.91٪، حديد (EDTA) 4.7٪، بورون 5٪، موليبدنيوم 9.5٪، مستخلص طحالب إيكلونيا ماكسيما',
    formEn: 'Water-Soluble Powder (Marine Algae)', formAr: 'مسحوق قابل للذوبان (طحالب بحرية)'
  },
  {
    id: 'algamax-forte', cat: 'biostim',
    nameEn: 'Algamax Forte', nameAr: 'الجوماكس فورتي',
    descEn: 'High-protein Ecklonia maxima seaweed extract rich in natural auxins, cytokinins, and protein hydrolysates. Maximises plant growth potential and resilience.',
    descAr: 'مستخلص طحالب بحرية (Ecklonia maxima) ذو محتوى عالٍ من الأوكسينات والسيتوكينينات وبروتين هيدروليزات — الأفضل لتغذية النبات.',
    compEn: 'K, N, Kelp Extract (Ecklonia maxima), Protein Hydrolysate 55%',
    compAr: 'بوتاسيوم، نيتروجين، مستخلص إيكلونيا ماكسيما، بروتين هيدروليزات 55٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'amino-por-cal', cat: 'biostim',
    nameEn: 'Amino Por Cal', nameAr: 'أمينو بور كال',
    descEn: 'Calcium, boron, and amino acid combination with mannitol for strengthening cell walls, preventing calcium deficiency disorders, and improving stress tolerance.',
    descAr: 'الاختيار الأمثل للتغذية النباتية ورفع الإجهاد البيئي عن النبات. يجمع الكالسيوم والبورون والأحماض الأمينية والمانيتول في تركيبة متكاملة.',
    compEn: 'N 2%, Ca 4%, B (ethanolamine complex) 1%, Plant Amino Acids 2%, Mannitol 8.5%',
    compAr: 'نيتروجين 2٪، كالسيوم 4٪، بورون (إيثانول أمين) 1٪، أحماض أمينية نباتية 2٪، مانيتول 8.5٪',
    formEn: 'Liquid', formAr: 'سائل'
  },

  /* ── PLANT GROWTH REGULATORS — 35 products ── */

  /* Gibberellin / GA3 (10) */
  {
    id: 'alto', cat: 'pgr',
    nameEn: 'Alto', nameAr: 'ألتو',
    descEn: 'New generation liquid gibberellic acid concentrate. Each 50cm³ bottle delivers 5g of pure GA3 for precise application in grapes, citrus, and fruit crops.',
    descAr: 'فكر جديد للجبريليك السائل — عبوة 50 سم³ تُعادل 5 جم جبريليك أسيد. تركيز عالٍ لتطبيق دقيق في العنب والحمضيات وأشجار الفاكهة.',
    compEn: 'Gibberellic Acid 10% (50cm³ bottle = 5g GA3)',
    compAr: 'جبريليك أسيد 10٪ (عبوة 50 سم³ = 5 جم جبريليك أسيد)',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'super-abscisic', cat: 'pgr',
    nameEn: 'Super Abscisic', nameAr: 'سوبر أبسيسيك',
    descEn: 'Abscisic acid formulation for improving fruit colour development, particularly under high-temperature conditions where natural ABA production is suppressed.',
    descAr: 'الاختيار الأمثل لتلوين مثالي للثمار — يُعوّض نقص حمض الأبسيسيك الطبيعي في درجات الحرارة المرتفعة لضمان تلوين متجانس.',
    compEn: 'Abscisic Acid (ABA) 10%',
    compAr: 'حمض الأبسيسيك 10٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'madox', cat: 'pgr',
    nameEn: 'Madox', nameAr: 'مادوكس',
    descEn: 'Ethephon-based ripening agent that accelerates colour development, improves fruit uniformity, and facilitates pre-harvest loosening for easier mechanical harvesting.',
    descAr: 'الحل الأمثل للتغلب على مشاكل التلوين وانضاج الثمار. يُسرّع النضج ويُحسّن التلوين المتجانس ويُسهّل الحصاد.',
    compEn: 'Ethephon 72%',
    compAr: 'أثيفون 72٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'new-ga3-40', cat: 'pgr',
    nameEn: 'New GA3 40%', nameAr: 'نيو جي اي ثري 40٪',
    descEn: 'High-potency gibberellic acid granules for precise dose measurement. Each 2.5g sachet delivers a concentrated GA3 dose for berry elongation and bunch sizing.',
    descAr: 'جبريليك أسيد فائق الجودة سريع الذوبان للقضاء على مشاكل التجرعة. كل كيس 2.5 جم يُعطي جرعة دقيقة وعالية التركيز.',
    compEn: 'Gibberellic Acid 40% (sachets of 2.5g)',
    compAr: 'جبريليك أسيد 40٪ (أكياس 2.5 جم)',
    formEn: 'Water-Soluble Granules', formAr: 'حبيبات قابلة للذوبان'
  },
  {
    id: 'ga3-extra', cat: 'pgr',
    nameEn: 'GA3 Extra', nameAr: 'جي اي ثري أكسترا',
    descEn: 'Effervescent gibberellin tablets — one tablet equals 2g of gibberellic acid. Designed for consistent dissolution and precise dosing in high-value crops.',
    descAr: 'القرص = قرصين 2 جم جبريليك أسيد — جبريليك سريع الذوبان وفائق الجودة لتطبيقات دقيقة وتجانس في الدوش.',
    compEn: 'Gibberellic Acid 20% × 10g tablets (1 tablet = 2g GA3)',
    compAr: 'جبريليك أسيد 20٪ × قرص 10 جم (القرص = 2 جم جبريليك أسيد)',
    formEn: 'Effervescent Tablets', formAr: 'أقراص فورانية'
  },
  {
    id: 'maxi-tablet', cat: 'pgr',
    nameEn: 'Maxi Tablet', nameAr: 'ماكسي تابلت',
    descEn: 'Precisely dosed gibberellin tablet — 1g GA3 per tablet. Fast-dissolving formulation for convenient and accurate field application.',
    descAr: 'القرص = 1 جم جبريليك أسيد — جبريليك فائق الجودة سريع الذوبان بجرعة مضبوطة لكل قرص لسهولة التطبيق الحقلي.',
    compEn: 'Gibberellic Acid 10% × 10g tablets (1 tablet = 1g GA3)',
    compAr: 'جبريليك أسيد 10٪ × قرص 10 جم (القرص = 1 جم جبريليك أسيد)',
    formEn: 'Effervescent Tablets', formAr: 'أقراص فورانية'
  },
  {
    id: 'sonlibex', cat: 'pgr',
    nameEn: 'Sonlibex', nameAr: 'سون ليبكس',
    descEn: 'Fastest-acting liquid gibberellic acid for maximum absorption speed. Used for berry elongation in grapes and bunch development applications.',
    descAr: 'أسرع وأقوى جبريليك سائل سريع الامتصاص — مثالي لاستطالة حبات العنب وتنمية العناقيد.',
    compEn: 'Gibberellic Acid 4%',
    compAr: 'جبريليك أسيد 4٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'zalkex', cat: 'pgr',
    nameEn: 'Zalkex', nameAr: 'ذالكس',
    descEn: 'Fast-absorbing liquid GA3 for rapid systemic uptake and berry development in table grapes and citrus. High-quality formula for consistent results.',
    descAr: 'أسرع وأقوى جبريليك سائل سريع الامتصاص. جودة عالية وامتصاص سريع لنتائج ثابتة في العنب والحمضيات.',
    compEn: 'Gibberellic Acid 4%',
    compAr: 'جبريليك أسيد 4٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'flonex', cat: 'pgr',
    nameEn: 'Flonex', nameAr: 'فلونس',
    descEn: 'Higher-concentration liquid gibberellic acid (6%) for applications requiring a stronger hormonal response. Ideal for strong bunch elongation and thinning.',
    descAr: 'أسرع وأقوى جبريليك سائل بتركيز 6٪ لنتائج أقوى في استطالة العناقيد والتنظيم الحرشفي.',
    compEn: 'Gibberellic Acid 6%',
    compAr: 'جبريليك أسيد 6٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'declan', cat: 'pgr',
    nameEn: 'Declan', nameAr: 'ديكلان',
    descEn: 'High-concentration professional liquid GA3 for specialist use in citrus rind development, grape berry sizing, and other advanced gibberellin applications.',
    descAr: 'جبريليك سائل عالي التركيز سريع الامتصاص للاستخدامات المتخصصة في تطوير قشرة الحمضيات وتضخيم حبات العنب.',
    compEn: 'Gibberellic Acid 25.08%',
    compAr: 'جبريليك أسيد 25.08٪',
    formEn: 'Liquid', formAr: 'سائل'
  },

  /* NAA / Flowering & Fruit Set (7) */
  {
    id: 'damak-fix', cat: 'pgr',
    nameEn: 'Damak Fix', nameAr: 'دماك فيكس',
    descEn: 'Three-component NAA blend for maximum fruit set improvement. Combines BNOA, NAD, and NAA for a synergistic effect on fruit retention and set uniformity.',
    descAr: 'لتحسين التزهير وزيادة العقد — مزيج ثلاثي المكونات من المواد المنظّمة للنمو يُعطي تأثيراً تعاونياً أفضل للعقد وتثبيت الثمار.',
    compEn: 'BNOA 1.5%, NAD 1.25%, NAA 0.5%',
    compAr: 'بيتا نفتوكسي استيك أسيد 1.5٪، نفثالين استيتاميد 1.25٪، نفثالين استيك أسيد 0.5٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'mikato-up', cat: 'pgr',
    nameEn: 'Mikato Up', nameAr: 'ميكاتو اب',
    descEn: 'Dual NAA formulation (NAD + NAA) for improving pollination success and reducing physiological fruit drop after fruit set.',
    descAr: 'لتحسين التزهير وزيادة العقد وتقليل التساقط الفسيولوجي للثمار. مزيج ثنائي من مشتقات حمض النفثالين لأفضل ثبات للثمار.',
    compEn: 'NAD 1.25%, NAA 0.45%',
    compAr: 'نفثالين استيتاميد 1.25٪، نفثالين استيك أسيد 0.45٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'hyper-s', cat: 'pgr',
    nameEn: 'Hyper-S', nameAr: 'هايبر-اس',
    descEn: 'High-potency NAA liquid for powerful flowering and fruit set stimulation. Effective across a wide range of fruit trees and vegetable crops.',
    descAr: 'لتحسين التزهير وزيادة العقد بتركيز قوي من حمض النفثالين الأسيتيك. فعّال على نطاق واسع من المحاصيل وأشجار الفاكهة.',
    compEn: 'NAA (Naphthalene Acetic Acid) 3.5%',
    compAr: 'نفثالين استيك أسيد (NAA) 3.5٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'leaf-pro', cat: 'pgr',
    nameEn: 'Leaf Pro', nameAr: 'ليف برو',
    descEn: 'Professional NAA formulation for improving fruit set and preventing pre-harvest drop in stone fruits, pome fruits, and citrus.',
    descAr: 'لتحسين التزهير وزيادة العقد وتقليل التساقط قبل الحصاد في ثمار النواة والتفاحيات والحمضيات.',
    compEn: 'NAA (Naphthalene Acetic Acid) 3%',
    compAr: 'نفثالين استيك أسيد 3٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'carius', cat: 'pgr',
    nameEn: 'Carius', nameAr: 'كاريوس',
    descEn: 'Maximum-strength NAA formulation for intensive fruit retention applications. Reduces physiological drop and improves set under stress conditions.',
    descAr: 'لتحسين التزهير وزيادة العقد بأعلى تركيز من حمض NAA. يقلل من التساقط الفسيولوجي ويُحسّن العقد في ظروف الإجهاد.',
    compEn: 'NAA (Naphthalene Acetic Acid) 5.05%',
    compAr: 'نفثالين استيك أسيد 5.05٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'damak-negro-max', cat: 'pgr',
    nameEn: 'Damak Negro Max', nameAr: 'دماك نيجرو ماكس',
    descEn: 'Triple-action growth activator combining NAA, 6-BAP cytokinin, and DHA. Stimulates vegetative growth, improves flowering quality, and supports overall plant vitality.',
    descAr: 'منشط عام للمجموع الخضري ولتحسين التزهير. يجمع بين NAA والسيتوكينين (6-BAP) والـ DHA لتأثير شامل على نمو النبات.',
    compEn: 'NAA 0.5%, 6-BAP (Cytokinin) 0.1%, DHA 4%',
    compAr: 'نفثالين استيك أسيد 0.5٪، سيتوكينين (6-BAP) 0.1٪، داي إيثيل أمينو هكسينات 4٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'track', cat: 'pgr',
    nameEn: 'Track', nameAr: 'تراك',
    descEn: 'GA(4+7) formula with calcium and boron for improving fruit set quality and shape development. The 4+7 isomer combination is particularly effective in apples, pears, and grapes.',
    descAr: 'المفهوم الجديد للجبريليك في تحسين العقد وجودة الثمار — يحتوي على جبريليك (GA 4+7) مع كالسيوم وبورون لتضخيم وتشكيل الثمار.',
    compEn: 'GA (4+7) 7.8%, Calcium 5%, Boron 2%',
    compAr: 'جبريليك أسيد (GA 4+7) 7.8٪، كالسيوم 5٪، بورون 2٪',
    formEn: 'Liquid', formAr: 'سائل'
  },

  /* Brassinolide / Tricontanol / Root / Misc PGR (7) */
  {
    id: 'sinolide-one', cat: 'pgr',
    nameEn: 'Sinolide One', nameAr: 'سينولايد وان',
    descEn: 'Brassinolide (24-Epibrassinolide) formulation for increasing crop stress tolerance against heat, cold, salinity, drought, and pesticide phytotoxicity. Also accelerates breakdown of pesticide residues in fruit.',
    descAr: 'الحل الأمثل لزيادة مقاومة النبات للأمراض والإجهادات البيئية المختلفة (ملوحة — جفاف — حرارة — صقيع — تسمم بمبيدات) والأسرع في تكسير متبقيات المبيدات في الثمار.',
    compEn: '24-Epibrassinolide 1 ppm',
    compAr: 'براسينولايد (24-Epibrassinolide) 1 ل.م.',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'trimax', cat: 'pgr',
    nameEn: 'Trimax', nameAr: 'ترايماكس',
    descEn: 'Triacontanol + sodium nitrophenolate combination for accelerating vegetative growth, improving flowering, increasing fruit set, and reducing pre-harvest fruit drop.',
    descAr: 'الأفضل على الإطلاق في زيادة النمو الخضري وتحسين التزهير والعقد وتقليل تساقط الثمار — تركيبة ثنائية من التراياكونتانول والنيتروفينيلات.',
    compEn: 'Triacontanol 1.4%, Sodium Nitrophenolate 1.8%',
    compAr: 'تراياكونتانول 1.4٪، نيتروفينيلات الصوديوم 1.8٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'broxal', cat: 'pgr',
    nameEn: 'Broxal', nameAr: 'بروكسا',
    descEn: 'Prohexadione-calcium plant growth regulator for controlling excessive vegetative growth while simultaneously improving fruit colour development and increasing sugar content.',
    descAr: 'للتحكم في النمو الخضري للنبات وتحسين جودة الثمار من حيث اللون ونسبة السكر — يُوجّه طاقة النبات من النمو الخضري إلى الإثمار.',
    compEn: 'Prohexadione-Calcium 15%',
    compAr: 'بروهيكسادايون كالسيوم 15٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'indole', cat: 'pgr',
    nameEn: 'Indole', nameAr: 'اندول',
    descEn: 'Pure IBA (Indole Butyric Acid) formulation — the strongest root stimulant in the DAMAK range. Essential for establishing new plantings, transplants, and cuttings.',
    descAr: 'أقوى منشط جذور — تركيبة نقية من اندول بيوتريك أسيد لتنشيط جذور النبات وتسريع تأسيس الشتلات الجديدة والعقل.',
    compEn: 'IBA (Indole Butyric Acid) 2%',
    compAr: 'اندول بيوتريك أسيد (IBA) 2٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'extra-indole', cat: 'pgr',
    nameEn: 'Extra Indole', nameAr: 'أكسترا اندول',
    descEn: 'IBA combined with abscisic acid for optimum rooting in cuttings and transplants. The ABA component aids root initiation and reduces transplant shock.',
    descAr: 'الأفضل في تنشيط الجذور — يجمع اندول بيوتريك أسيد مع أبسيسيك أسيد لتحفيز الجذور الجديدة وتقليل صدمة الزراعة.',
    compEn: 'IBA 1.8%, Abscisic Acid (5-abscisic acid) 0.3%',
    compAr: 'اندول بيوتريك أسيد 1.8٪، أبسيسيك أسيد 0.3٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'balio', cat: 'pgr',
    nameEn: 'Balio', nameAr: 'باليو',
    descEn: 'IBA + NAA dual-auxin root stimulant for cuttings. The combined auxin formula maximises rooting percentage and root system quality in propagation.',
    descAr: 'التجذير كما يجب أن يكون — مزيج مثالي من اندول بيوتريك أسيد وNAA للحصول على أعلى نسبة تجذير وأفضل جودة جذر.',
    compEn: 'IBA 1.5%, NAA 2%',
    compAr: 'اندول بيوتريك أسيد 1.5٪، نفثالين استيك أسيد 2٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'damak-6', cat: 'pgr',
    nameEn: 'Damak 6', nameAr: 'دماك ست',
    descEn: 'Sodium nitrophenolate complex for improving flowering synchronisation, fruit set, and cell division. Delivers new-generation results in a wide range of crops.',
    descAr: 'الجيل الجديد في تحسين التزهير وزيادة العقد — تركيبة من نيتروفينيلات الصوديوم لتنسيق التزهير وتحسين انقسام الخلايا وتثبيت الثمار.',
    compEn: 'Sodium 5-nitroguasiacalate 0.3%, Sodium ortho-nitrophenolate 0.6%, Sodium para-nitrophenolate 0.9%',
    compAr: 'Sodium 5-nitroguasiacalate 0.3٪، Sodium ortho-nitrophenolate 0.6٪، Sodium para-nitrophenolate 0.9٪',
    formEn: 'Liquid', formAr: 'سائل'
  },

  /* Cytokinin / CPPU (7) */
  {
    id: 'super-feneron', cat: 'pgr',
    nameEn: 'Super Feneron', nameAr: 'سوبر فينيرون',
    descEn: '#1 for increasing fruit set and berry enlargement. CPPU (forchlorfenuron) provides the strongest cytokinin-driven sizing response for table grapes and kiwi.',
    descAr: 'رقم واحد في زيادة العقد والتضخيم — فوركلورفينيرون (CPPU) يُعطي أقوى استجابة سيتوكينين لتضخيم حبات العنب والكيوي.',
    compEn: 'CPPU (Forchlorfenuron) 1%',
    compAr: 'فوركلورفينيرون (CPPU) 1٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'atos-extra', cat: 'pgr',
    nameEn: 'Atos Extra', nameAr: 'اتوس اكسترا',
    descEn: 'CPPU with GA3 and auxins — the complete berry elongation and enlargement solution for table grapes. Also the best choice for improving flowering in strawberries and fruit set in citrus.',
    descAr: 'الحل الأمثل للاستطالة والتضخيم في العنب — الأفضل للتزهير في الفراولة والعقد في الموالح. يجمع CPPU مع جبريليك وأوكسينات.',
    compEn: 'CPPU (Forchlorfenuron) 0.12%, GA3 2%, Auxins & additives',
    compAr: 'فوركلورفينيرون (CPPU) 0.12٪، جبريليك أسيد 2٪، أوكسينات وإضافات أخرى',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'mark', cat: 'pgr',
    nameEn: 'Mark', nameAr: 'مارك',
    descEn: 'High-concentration 6-BAP (6-Benzylaminopurine) for professional cytokinin applications. Maximises fruit cell division for superior berry and fruit enlargement.',
    descAr: 'المفهوم الجديد للسيتوكينين في زيادة العقد والتضخيم — 6-بنزيل أمينو بيورين بتركيز 8٪ لانقسام خلوي أقوى وتضخيم أفضل.',
    compEn: '6-BAP (6-Benzylaminopurine) 8%',
    compAr: '6-بنزيل أمينو بيورين 8٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'techno-extra', cat: 'pgr',
    nameEn: 'Techno Extra', nameAr: 'تكنو اكسترا',
    descEn: '6-BAP combined with GA3 for synergistic cytokinin + gibberellin activity — improving both fruit set and subsequent berry or fruit enlargement simultaneously.',
    descAr: 'المفهوم الجديد للسيتوكينين في زيادة العقد والتضخيم — يجمع 6-BAP مع GA3 للتأثير المزدوج على انقسام الخلايا والتضخيم.',
    compEn: '6-BAP 2%, GA3 2%',
    compAr: '6-بنزيل أمينو بيورين 2٪، جبريليك أسيد (GA3) 2٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'dixon', cat: 'pgr',
    nameEn: 'Dixon', nameAr: 'ديكسون',
    descEn: '6-BAP with GA(4+7) for improving both fruit enlargement and shape development. Particularly effective in stone fruits and table grapes for commercial presentation quality.',
    descAr: 'المفهوم الجديد للتضخيم وتحسين جودة الثمار — يجمع 6-BAP مع GA(4+7) للتأثير على شكل وحجم الثمار معاً.',
    compEn: '6-BAP 1.8%, GA (4+7) 1.8%',
    compAr: '6-بنزيل أمينو بيورين 1.8٪، جبريليكات (GA 4+7) 1.8٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'macovit-drw', cat: 'pgr',
    nameEn: 'Macovit DRW', nameAr: 'ماكوفيت دي أر دبليو',
    descEn: 'Kinetin-based cytokinin for stimulating cell division and promoting early maturation. The gentler cytokinin option suitable for sensitive crops and refined quality requirements.',
    descAr: 'الجيل الجديد من السيتوكينين في التضخيم وتبكير النضج — يحتوي على كينيتين (Kinetin) للتأثير اللطيف المناسب للمحاصيل الحساسة.',
    compEn: 'Kinetin 0.4%',
    compAr: 'كينيتين (Kinetin) 0.4٪',
    formEn: 'Liquid', formAr: 'سائل'
  },
  {
    id: 'brace-br', cat: 'pgr',
    nameEn: 'Brace BR', nameAr: 'بريس بي أر',
    descEn: 'Brassinolide formulation for improving plant stress resistance across all crop types. Protects against heat, cold, salinity, and drought. Promotes breakdown of pesticide residues in harvested produce.',
    descAr: 'الحل الأمثل لزيادة مقاومة النبات للإجهادات البيئية المختلفة (ملوحة — جفاف — حرارة — صقيع — تسمم بمبيدات) والأسرع في تكسير متبقيات المبيدات.',
    compEn: 'Brassinolide 15 ppm',
    compAr: 'براسينولايد (Brassinolide) 15 ل.م.',
    formEn: 'Liquid', formAr: 'سائل'
  },

  /* ── DORMANCY BREAKERS (1) ── */
  {
    id: 'damak-dormex', cat: 'dormancy',
    nameEn: 'Damak Dormex', nameAr: 'دماك دورميكس',
    descEn: 'Hydrogen cyanamide (HCN) for breaking winter dormancy in deciduous fruit trees. Promotes uniform budbreak, improves flowering synchronisation, and increases productive bud numbers.',
    descAr: 'الاختيار الأمثل لكسر سكون الأشجار المتساقطة الأوراق — سياناميد الهيدروجين يُنظّم كسر الطور الساكن ويُحسّن التفتح المتجانس للبراعم.',
    compEn: 'Hydrogen Cyanamide (HCN) 50%',
    compAr: 'سياناميد الهيدروجين (HCN) 50٪',
    formEn: 'Liquid', formAr: 'سائل'
  },

  /* ── FERTILIZERS (1) ── */
  {
    id: 'fero-pro', cat: 'fertilizer',
    nameEn: 'Fero Pro', nameAr: 'فيرو برو',
    descEn: 'Superior soil-applied EDDHA iron chelate for correcting iron deficiency chlorosis. The high ortho-ortho fraction (5.2%) ensures iron availability even in high-pH calcareous soils common across Egypt.',
    descAr: 'حديد أرضي فائق الجودة — الأفضل لعلاج أعراض نقص الحديد وصفرة الأوراق في الترب القلوية والجيرية المنتشرة في مصر.',
    compEn: 'Iron (EDDHA) 6%, of which ortho-ortho fraction 5.2%',
    compAr: 'حديد (EDDHA) 6٪ منها الجزء أورثو-أورثو 5.2٪',
    formEn: 'Water-Soluble Granules', formAr: 'حبيبات قابلة للذوبان'
  },

  /* ── PESTICIDES (3) ── */
  {
    id: 'norwich-5', cat: 'pesticide',
    nameEn: 'Norwich 5%', nameAr: 'نوريتش 5٪',
    descEn: 'Broad-spectrum abamectin acaricide/insecticide (5% EC) for controlling a wide range of mites and insects in vegetables, fruits, and field crops. Emulsifiable concentrate.',
    descAr: '(مركز قابل للاستحلاب) — مبيد أكاروسي وحشري على مدى واسع من الأكاروسات والحشرات في الخضروات والفاكهة والمحاصيل الحقلية.',
    compEn: 'Abamectin 5% (EC — Emulsifiable Concentrate)',
    compAr: 'أبامكتين 5٪ (مركز قابل للاستحلاب)',
    formEn: 'EC (Emulsifiable Concentrate)', formAr: 'مركز قابل للاستحلاب'
  },
  {
    id: 'adomy-75', cat: 'pesticide',
    nameEn: 'Adomy 75%', nameAr: 'أدومي 75٪',
    descEn: 'Dual-active systemic fungicide (WG) with both preventive and curative action. Trifloxystrobin + tebuconazole combination provides broad-spectrum control of major fungal diseases.',
    descAr: '(حبيبات قابلة للانتشار في الماء) — مبيد فطري جهازي وقائي علاجي للقضاء على مدى واسع من الأمراض الفطرية بمادتين فعّالتين.',
    compEn: 'Trifloxystrobin 25% + Tebuconazole 50% (WG)',
    compAr: 'ترايفلوكسي ستروبين 25٪ + ثيبوكونازول 50٪ (حبيبات قابلة للانتشار)',
    formEn: 'WG (Water-Dispersible Granules)', formAr: 'حبيبات قابلة للانتشار في الماء'
  },
  {
    id: 'conform-80', cat: 'pesticide',
    nameEn: 'Conform 80%', nameAr: 'كونفرم 80٪',
    descEn: 'Azoxystrobin broad-spectrum fungicide with preventive, curative, and eradicant activity against major fungal pathogens in vegetables, fruits, and cereals.',
    descAr: '(حبيبات قابلة للانتشار في الماء) — مبيد فطري وقائي وعلاجي وإبادي للقضاء على مدى واسع من الأمراض الفطرية في الخضروات والفاكهة والحبوب.',
    compEn: 'Azoxystrobin 80% (WG)',
    compAr: 'أزوكسي ستروبين 80٪ (حبيبات قابلة للانتشار)',
    formEn: 'WG (Water-Dispersible Granules)', formAr: 'حبيبات قابلة للانتشار في الماء'
  }

];
