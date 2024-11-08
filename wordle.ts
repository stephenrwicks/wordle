
// Grabbed this list from https://gist.github.com/shmookey/b28e342e1b1756c4700f42f17102c2ff
const fullWordList = ["aback", "abaft", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abler", "abode", "about", "above", "abuse", "abyss", "ached", "aches", "acids", "acorn", "acres", "acrid", "acted", "actor", "acute", "adage", "adapt", "added", "adder", "adept", "adieu", "admit", "adobe", "adopt", "adore", "adorn", "adult", "aegis", "aeons", "affix", "afire", "afoot", "after", "again", "agape", "agate", "agent", "agile", "aging", "aglow", "agony", "agree", "ahead", "aided", "aides", "ailed", "aimed", "aired", "aisle", "alarm", "album", "alder", "alert", "alias", "alibi", "alien", "alike", "alive", "allay", "alley", "allot", "allow", "alloy", "aloes", "aloft", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "altos", "amass", "amaze", "amber", "amble", "amend", "amigo", "amiss", "amity", "among", "amour", "ample", "amply", "amuse", "angel", "anger", "angle", "angry", "angst", "anime", "ankle", "annex", "annoy", "annul", "antes", "antic", "anvil", "apace", "apart", "aping", "appal", "apple", "apply", "apron", "aptly", "areas", "arena", "argue", "arise", "armed", "aroma", "arose", "array", "arrow", "arson", "ashen", "ashes", "aside", "asked", "askew", "aspen", "assay", "asses", "asset", "aster", "astir", "atlas", "atoll", "atoms", "atone", "attar", "attic", "audio", "audit", "auger", "aught", "augur", "aunts", "auras", "autos", "avail", "avers", "avert", "avoid", "avows", "await", "awake", "award", "aware", "awful", "awoke", "axiom", "axles", "azure", "babel", "babes", "backs", "bacon", "badge", "badly", "baggy", "baits", "baize", "baked", "baker", "bales", "balls", "balmy", "banal", "bands", "bandy", "bangs", "banjo", "banks", "banns", "barbs", "bards", "bared", "barge", "barks", "barns", "baron", "basal", "based", "baser", "bases", "basic", "basil", "basin", "basis", "basso", "baste", "batch", "bated", "bathe", "baths", "baton", "bayou", "beach", "beads", "beady", "beaks", "beams", "beans", "beard", "bears", "beast", "beaux", "beech", "beets", "befit", "began", "begat", "beget", "begin", "begot", "begun", "being", "belie", "belle", "bells", "belly", "below", "belts", "bench", "bends", "bergs", "berry", "berth", "beryl", "beset", "besom", "bevel", "bible", "bided", "bides", "bight", "bigot", "bilge", "bills", "billy", "binds", "biped", "birch", "birds", "birth", "bison", "bitch", "bites", "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleat", "bleed", "blend", "blent", "bless", "blest", "blind", "blink", "bliss", "block", "blocs", "blond", "blood", "bloom", "blots", "blown", "blows", "bluer", "blues", "bluff", "blunt", "blurt", "blush", "board", "boars", "boast", "boats", "boded", "bodes", "boggy", "bogus", "boils", "boles", "bolts", "bombs", "bonds", "boned", "bones", "bonny", "bonus", "booby", "books", "booms", "boons", "boors", "boost", "booth", "boots", "booty", "booze", "borax", "bored", "bores", "borne", "bosom", "bough", "bound", "bouts", "bowed", "bowel", "bower", "bowls", "boxed", "boxer", "boxes", "brace", "brags", "braid", "brain", "brake", "brand", "brass", "brats", "brave", "bravo", "brawl", "brawn", "bread", "break", "breed", "briar", "bribe", "brick", "bride", "brief", "brier", "brigs", "brims", "brine", "bring", "brink", "briny", "brisk", "broad", "broil", "broke", "brood", "brook", "broom", "broth", "brown", "brows", "bruin", "brunt", "brush", "brute", "bucks", "budge", "buggy", "bugle", "build", "built", "bulbs", "bulge", "bulks", "bulky", "bulls", "bully", "bumps", "bunch", "bunks", "buoys", "burly", "burns", "burnt", "burro", "burrs", "burst", "bushy", "busts", "butte", "butts", "buxom", "buyer", "cabal", "cabby", "cabin", "cable", "cacao", "cache", "cadet", "cadre", "caged", "cages", "cairn", "caked", "cakes", "calls", "calms", "calyx", "camel", "cameo", "camps", "canal", "candy", "canes", "canny", "canoe", "canon", "canto", "caper", "capes", "capon", "cards", "cared", "cares", "cargo", "carol", "carry", "carts", "carve", "cased", "cases", "casks", "caste", "casts", "catch", "cater", "cause", "caved", "caves", "cavil", "cease", "cedar", "ceded", "cells", "cents", "chafe", "chaff", "chain", "chair", "chalk", "champ", "chant", "chaos", "chaps", "charm", "chart", "chary", "chase", "chasm", "chats", "cheap", "cheat", "check", "cheek", "cheer", "chefs", "chess", "chest", "chick", "chide", "chief", "child", "chill", "chime", "china", "chink", "chins", "chips", "chirp", "choir", "choke", "chops", "chord", "chose", "chuck", "chump", "chums", "chunk", "churl", "churn", "chute", "cider", "cigar", "cinch", "circa", "cited", "cites", "civet", "civic", "civil", "clack", "claim", "clamp", "clams", "clang", "clank", "clans", "claps", "clash", "clasp", "class", "claws", "clean", "clear", "clefs", "cleft", "clerk", "clews", "click", "cliff", "climb", "clime", "cling", "clink", "clips", "cloak", "clock", "clods", "clogs", "close", "cloth", "cloud", "clout", "clove", "clown", "clubs", "cluck", "clues", "clump", "clung", "coach", "coals", "coast", "coats", "cobra", "cocks", "cocoa", "codes", "coils", "coins", "colds", "colic", "colon", "colts", "combs", "comer", "comes", "comet", "comic", "comma", "conch", "cones", "conic", "cooed", "cooks", "cools", "copra", "copse", "coral", "cords", "cores", "corks", "corns", "corps", "costs", "cotes", "couch", "cough", "could", "count", "coupe", "coups", "court", "cover", "coves", "covet", "covey", "cowed", "cower", "coyly", "cozen", "crabs", "crack", "craft", "crags", "cramp", "crane", "crank", "crape", "crash", "crass", "crate", "crave", "crawl", "craze", "crazy", "creak", "cream", "credo", "creed", "creek", "creep", "crepe", "crept", "cress", "crest", "crews", "cribs", "crick", "cried", "crier", "cries", "crime", "crimp", "crisp", "croak", "crock", "crone", "crony", "crook", "crops", "cross", "croup", "crowd", "crown", "crows", "crude", "cruel", "crumb", "crush", "crust", "crypt", "cubes", "cubic", "cubit", "cuffs", "cults", "curds", "cured", "cures", "curls", "curly", "curry", "curse", "curst", "curve", "cycle", "cynic", "daddy", "daily", "dairy", "daisy", "dales", "dally", "dames", "damps", "dance", "dandy", "dared", "dares", "darts", "dated", "dates", "datum", "daubs", "daunt", "dawns", "dazed", "deals", "dealt", "deans", "dears", "death", "debar", "debit", "debts", "debut", "decay", "decks", "decoy", "decry", "deeds", "deems", "deeps", "defer", "deign", "deity", "delay", "dells", "delta", "delve", "demon", "demur", "dense", "dents", "depot", "depth", "derby", "desks", "deter", "deuce", "devil", "diary", "diced", "dices", "dicta", "diets", "digit", "dikes", "dimes", "dimly", "dined", "diner", "dines", "dingy", "dirge", "dirty", "discs", "disks", "ditch", "ditto", "ditty", "divan", "dived", "diver", "dives", "dizzy", "docks", "dodge", "doers", "dogma", "doing", "doled", "dolls", "domed", "domes", "donor", "dooms", "doors", "dosed", "doses", "doted", "dotes", "doubt", "dough", "doves", "dowdy", "downs", "downy", "dowry", "dozed", "dozen", "draft", "drags", "drain", "drake", "drama", "drams", "drank", "drape", "drawl", "drawn", "draws", "drays", "dread", "dream", "dregs", "dress", "dried", "drier", "dries", "drift", "drill", "drily", "drink", "drips", "drive", "droll", "drone", "droop", "drops", "dross", "drove", "drown", "drugs", "drums", "drunk", "dryly", "ducal", "ducat", "duchy", "ducks", "ducts", "duels", "duets", "dukes", "dully", "dummy", "dumps", "dumpy", "dunce", "dunes", "dunno", "duped", "dupes", "dusky", "dusty", "dwarf", "dwell", "dwelt", "dying", "dykes", "eager", "eagle", "earls", "early", "earns", "earth", "eased", "easel", "eases", "eaten", "eater", "eaves", "ebbed", "ebony", "edged", "edges", "edict", "edify", "eerie", "egged", "eight", "eject", "elate", "elbow", "elder", "elect", "elegy", "elfin", "elite", "elope", "elude", "elves", "email", "emits", "empty", "enact", "ended", "endow", "enemy", "enjoy", "ennui", "enrol", "ensue", "enter", "entry", "envoy", "epics", "epoch", "equal", "equip", "erase", "erect", "erred", "error", "essay", "ether", "ethic", "evade", "event", "every", "evils", "evoke", "exact", "exalt", "excel", "exert", "exile", "exist", "exits", "expel", "extol", "extra", "exult", "eying", "eyrie", "fable", "faced", "faces", "facts", "faded", "fades", "fails", "faint", "fairs", "fairy", "faith", "fakir", "falls", "false", "famed", "fancy", "fangs", "farce", "fared", "fares", "farms", "fasts", "fatal", "fated", "fates", "fatty", "fault", "fauna", "fauns", "fawns", "fears", "feast", "feats", "feeds", "feels", "feign", "feint", "fells", "felon", "fence", "feral", "ferns", "ferry", "fetch", "feted", "fetid", "fetus", "feuds", "fever", "fewer", "fiche", "fiefs", "field", "fiend", "fiery", "fifes", "fifth", "fifty", "fight", "filch", "filed", "files", "filet", "fills", "filly", "films", "filmy", "filth", "final", "finch", "finds", "fined", "finer", "fines", "finis", "finny", "fiord", "fired", "fires", "firms", "first", "fishy", "fists", "fitly", "fives", "fixed", "fixer", "fixes", "fjord", "flags", "flail", "flair", "flake", "flaky", "flame", "flank", "flaps", "flare", "flash", "flask", "flats", "flaws", "fleas", "fleck", "flees", "fleet", "flesh", "flick", "flier", "flies", "fling", "flint", "flirt", "flits", "float", "flock", "floes", "flood", "floor", "flora", "floss", "flour", "flout", "flown", "flows", "flues", "fluff", "fluid", "fluke", "flume", "flung", "flush", "flute", "flyer", "foams", "foamy", "focal", "focus", "foggy", "foils", "foist", "folds", "folio", "folks", "folly", "foods", "fools", "foray", "force", "fords", "forge", "forgo", "forks", "forms", "forte", "forth", "forts", "forty", "forum", "found", "fount", "fours", "fowls", "foxes", "foyer", "frail", "frame", "franc", "frank", "fraud", "freak", "freed", "freer", "frees", "fresh", "frets", "friar", "fried", "frill", "frisk", "frock", "frogs", "frond", "front", "frost", "froth", "frown", "froze", "fruit", "fudge", "fuels", "fugue", "fully", "fumed", "fumes", "funds", "fungi", "funny", "furry", "furze", "fused", "fuses", "fussy", "fuzzy", "gable", "gaily", "gains", "gales", "galls", "games", "gamin", "gamma", "gamut", "gangs", "gaped", "gapes", "gases", "gasps", "gates", "gaudy", "gauge", "gaunt", "gauze", "gauzy", "gavel", "gawky", "gayer", "gayly", "gazed", "gazer", "gazes", "gears", "geese", "genie", "genii", "genre", "gents", "genus", "germs", "ghost", "giant", "gibes", "giddy", "gifts", "gilds", "gills", "gimme", "gipsy", "girds", "girls", "girth", "given", "gives", "glade", "gland", "glare", "glass", "glaze", "gleam", "glean", "glens", "glide", "glint", "gloat", "globe", "gloom", "glory", "gloss", "glove", "glows", "glued", "gnash", "gnats", "gnaws", "gnome", "goads", "goals", "goats", "godly", "going", "golly", "gongs", "gonna", "goods", "goody", "goose", "gored", "gorge", "gorse", "gotta", "gouge", "gourd", "gouty", "gowns", "grabs", "grace", "grade", "graft", "grain", "grams", "grand", "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "gravy", "graze", "great", "greed", "green", "greet", "greys", "grief", "grill", "grime", "grimy", "grind", "grins", "gripe", "grips", "grist", "groan", "groin", "groom", "grope", "gross", "group", "grove", "growl", "grown", "grows", "grubs", "gruel", "gruff", "grunt", "guano", "guard", "guess", "guest", "guide", "guild", "guile", "guilt", "guise", "gulch", "gulfs", "gulls", "gully", "gummy", "gusto", "gusts", "gusty", "gypsy", "habit", "hacks", "hails", "hairs", "hairy", "haled", "halls", "halts", "halve", "hands", "handy", "hangs", "happy", "hardy", "harem", "hares", "harms", "harps", "harpy", "harry", "harsh", "harts", "haste", "hasty", "hatch", "hated", "hater", "hauls", "haven", "havoc", "hawks", "hazel", "heads", "heady", "heals", "heaps", "heard", "hears", "heart", "heath", "heats", "heave", "heavy", "hedge", "heeds", "heels", "heirs", "helix", "hello", "helms", "helps", "hence", "herbs", "herds", "heron", "heros", "hewed", "hides", "hills", "hilly", "hilts", "hinds", "hinge", "hints", "hired", "hires", "hitch", "hives", "hoard", "hoary", "hobby", "hoist", "holds", "holes", "holly", "homes", "honey", "hoods", "hoofs", "hooks", "hoops", "hoots", "hoped", "hopes", "horde", "horns", "horny", "horse", "hosts", "hotel", "hotly", "hound", "hours", "house", "hovel", "hover", "howls", "hulks", "hulls", "human", "humid", "humps", "humus", "hunch", "hunts", "hurls", "hurry", "hurts", "husks", "husky", "hussy", "hydra", "hyena", "hymns", "icily", "icing", "ideal", "ideas", "idiom", "idiot", "idled", "idler", "idols", "idyll", "igloo", "image", "imbue", "impel", "imply", "inane", "incur", "index", "inept", "inert", "infer", "ingot", "inlet", "inner", "inter", "inure", "irate", "irked", "irons", "irony", "isles", "islet", "issue", "items", "ivory", "jacks", "jaded", "jails", "jaunt", "jeans", "jeers", "jelly", "jerks", "jerky", "jests", "jetty", "jewel", "jiffy", "joins", "joint", "joked", "joker", "jokes", "jolly", "joust", "joyed", "judge", "juice", "juicy", "jumps", "junks", "junta", "juror", "karma", "keels", "keeps", "ketch", "keyed", "khaki", "kicks", "kills", "kinda", "kinds", "kings", "kiosk", "kites", "knack", "knave", "knead", "kneel", "knees", "knell", "knelt", "knife", "knits", "knobs", "knock", "knoll", "knots", "known", "knows", "label", "laced", "laces", "lacks", "laden", "ladle", "lager", "lairs", "laity", "lakes", "lambs", "lamed", "lames", "lamps", "lance", "lands", "lanes", "lanky", "lapel", "lapse", "larch", "large", "largo", "larks", "larva", "lasso", "lasts", "latch", "later", "lathe", "laths", "laugh", "lawns", "layer", "leads", "leafy", "leaks", "leaky", "leans", "leaps", "leapt", "learn", "lease", "leash", "least", "leave", "ledge", "leech", "leeks", "legal", "lemme", "lemon", "lends", "leper", "levee", "level", "lever", "liars", "libel", "licks", "liege", "liens", "lifts", "light", "liked", "liken", "liker", "likes", "lilac", "limbo", "limbs", "limes", "limit", "lined", "linen", "liner", "lines", "lingo", "links", "lions", "lists", "lithe", "lived", "liver", "lives", "livid", "llama", "loads", "loamy", "loans", "loath", "lobby", "lobes", "local", "locks", "locus", "lodge", "lofty", "loges", "logic", "login", "loins", "longs", "looks", "looms", "loons", "loops", "loose", "lords", "loser", "loses", "lotus", "louse", "lousy", "loved", "lover", "loves", "lowed", "lower", "lowly", "loyal", "lucid", "lucky", "lulls", "lumps", "lumpy", "lunar", "lunch", "lunge", "lungs", "lurch", "lured", "lures", "lurid", "lurks", "lusts", "lusty", "lutes", "lying", "lymph", "lynch", "lyric", "maces", "madam", "madly", "magic", "maids", "mails", "mains", "maize", "major", "maker", "makes", "males", "mamma", "manes", "manga", "mange", "mango", "mangy", "mania", "manly", "manna", "manor", "manse", "maple", "march", "mares", "marks", "marry", "marsh", "marts", "masks", "mason", "masts", "match", "mated", "mates", "mauve", "maxim", "maybe", "mayor", "mazes", "meals", "mealy", "means", "meant", "meats", "medal", "media", "meets", "melon", "melts", "memes", "mends", "menus", "mercy", "meres", "merge", "merit", "merry", "mesas", "metal", "meted", "meter", "mewed", "midst", "miens", "might", "milch", "miles", "milky", "mills", "mimes", "mimic", "mince", "minds", "mined", "miner", "mines", "minor", "mints", "minus", "mirth", "miser", "mists", "mites", "mixed", "mixes", "moans", "moats", "mocks", "model", "modem", "modes", "moist", "molar", "moles", "momma", "money", "monks", "month", "moods", "moody", "moons", "moors", "moose", "moped", "moral", "mores", "mossy", "motes", "moths", "motif", "motor", "motto", "mound", "mount", "mourn", "mouse", "mouth", "moved", "mover", "moves", "movie", "mowed", "mower", "mucus", "muddy", "mules", "multi", "mummy", "mumps", "munch", "mural", "murky", "mused", "muses", "music", "musky", "musty", "muted", "mutes", "myrrh", "myths", "nabob", "nails", "naive", "naked", "named", "names", "nasal", "nasty", "natal", "natty", "naval", "navel", "naves", "nears", "necks", "needs", "needy", "neigh", "nerve", "nests", "never", "newer", "newly", "nicer", "niche", "niece", "night", "ninny", "noble", "nobly", "noise", "noisy", "nomad", "nonce", "nooks", "noose", "north", "nosed", "noses", "notch", "noted", "notes", "nouns", "novel", "nudge", "nurse", "nymph", "oaken", "oakum", "oases", "oasis", "oaten", "oaths", "obese", "obeys", "occur", "ocean", "ochre", "odder", "oddly", "odium", "offal", "offer", "often", "oiled", "olden", "older", "omens", "omits", "onion", "onset", "oozed", "oozes", "opals", "opens", "opera", "opine", "opium", "optic", "orbit", "order", "organ", "osier", "other", "otter", "ought", "ounce", "outdo", "outer", "ovals", "ovary", "ovens", "overt", "owing", "owned", "owner", "oxide", "ozone", "paces", "packs", "paddy", "padre", "paean", "pagan", "pages", "pails", "pains", "paint", "pairs", "paled", "paler", "pales", "palms", "palmy", "palsy", "panel", "panes", "pangs", "panic", "pansy", "pants", "papal", "papas", "paper", "pared", "parka", "parks", "parry", "parse", "parts", "party", "pasha", "paste", "pasty", "patch", "pates", "paths", "patio", "pause", "paved", "pawed", "pawns", "payed", "payer", "peace", "peach", "peaks", "peals", "pearl", "pears", "pease", "pecks", "pedal", "peeps", "peers", "pelts", "penal", "pence", "penis", "penny", "peons", "perch", "peril", "pesky", "pesos", "pests", "petal", "petty", "phase", "phial", "phone", "photo", "piano", "picks", "piece", "piers", "piety", "pigmy", "pikes", "piled", "piles", "pills", "pilot", "pinch", "pined", "pines", "pinks", "pinto", "pints", "pious", "piped", "piper", "pipes", "pique", "pitch", "pithy", "pivot", "place", "plaid", "plain", "plait", "plane", "plank", "plans", "plant", "plate", "plays", "plaza", "plead", "pleas", "plied", "plies", "plots", "pluck", "plugs", "plumb", "plume", "plums", "plush", "podia", "poems", "poesy", "poets", "point", "poise", "poked", "poker", "pokes", "polar", "poles", "polka", "polls", "ponds", "pools", "popes", "poppa", "poppy", "porch", "pored", "pores", "ports", "posed", "poser", "poses", "posse", "posts", "pouch", "pound", "pours", "power", "prank", "prate", "prays", "press", "preys", "price", "prick", "pride", "pried", "pries", "prime", "print", "prior", "prism", "privy", "prize", "probe", "prone", "proof", "props", "prose", "prosy", "proud", "prove", "prowl", "prows", "proxy", "prude", "prune", "psalm", "pshaw", "pudgy", "puffs", "puffy", "pulls", "pulpy", "pulse", "pumps", "punch", "pupil", "puppy", "puree", "purer", "purge", "purse", "pussy", "putty", "quack", "quaff", "quail", "quake", "qualm", "quart", "quasi", "quays", "queen", "queer", "quell", "query", "quest", "queue", "quick", "quiet", "quill", "quilt", "quips", "quire", "quite", "quits", "quota", "quote", "quoth", "rabbi", "rabid", "raced", "racer", "races", "racks", "radii", "radio", "rafts", "raged", "rages", "raids", "rails", "rains", "rainy", "raise", "rajah", "raked", "rakes", "rally", "ranch", "range", "ranks", "rapid", "rarer", "rares", "rated", "rates", "ratio", "raved", "raven", "raves", "rayon", "razed", "razor", "reach", "react", "reads", "ready", "realm", "reals", "reams", "reaps", "rears", "rebel", "rebus", "rebut", "recur", "reeds", "reedy", "reefs", "reeks", "reels", "reeve", "refer", "refit", "regal", "reign", "reins", "relax", "relay", "relic", "remit", "rends", "renew", "rents", "repay", "repel", "reply", "reset", "resin", "rests", "revel", "revue", "rheum", "rhyme", "ricks", "rider", "rides", "ridge", "rifle", "rifts", "right", "rigid", "riled", "rills", "rimes", "rings", "rinse", "riots", "ripen", "riper", "risen", "riser", "rises", "risks", "risky", "rites", "rival", "riven", "river", "rivet", "roads", "roams", "roars", "roast", "robed", "robes", "robin", "rocks", "rocky", "rogue", "roles", "rolls", "roman", "roofs", "rooks", "rooms", "roomy", "roost", "roots", "roped", "ropes", "roses", "rosin", "rouge", "rough", "round", "rouse", "route", "routs", "roved", "rover", "rowdy", "rowed", "royal", "ruder", "ruffs", "ruins", "ruled", "ruler", "rules", "runes", "rungs", "rupee", "rural", "ruses", "sable", "sabre", "sacks", "sadly", "safer", "sagas", "sages", "sahib", "sails", "saint", "saith", "salad", "sales", "sally", "salon", "salsa", "salts", "salty", "salve", "salvo", "sands", "sandy", "saner", "sated", "satin", "satyr", "sauce", "saucy", "saved", "saves", "sawed", "scald", "scale", "scalp", "scaly", "scamp", "scans", "scant", "scare", "scarf", "scars", "scene", "scent", "scion", "scoff", "scold", "scoop", "scope", "score", "scorn", "scour", "scout", "scowl", "scrap", "screw", "scrip", "scrub", "scull", "seals", "seams", "seamy", "seats", "sects", "sedan", "sedge", "seeds", "seedy", "seeks", "seems", "seers", "seize", "sells", "semen", "sends", "sense", "serfs", "serge", "serum", "serve", "seven", "sever", "sewed", "sewer", "sexes", "shack", "shade", "shady", "shaft", "shake", "shaky", "shale", "shall", "shalt", "shame", "shams", "shank", "shape", "share", "shark", "sharp", "shave", "shawl", "sheaf", "shear", "sheds", "sheen", "sheep", "sheer", "sheet", "sheik", "shelf", "shell", "shied", "shift", "shine", "shins", "shiny", "ships", "shire", "shirk", "shirt", "shoal", "shock", "shoes", "shone", "shook", "shoon", "shoot", "shops", "shore", "shorn", "short", "shots", "shout", "shove", "shown", "shows", "showy", "shred", "shrew", "shrub", "shrug", "shuns", "shuts", "shyly", "sibyl", "sided", "sides", "siege", "sieve", "sighs", "sight", "sigma", "signs", "silks", "silky", "sills", "silly", "since", "sinew", "singe", "sings", "sinks", "siren", "sires", "sites", "sixes", "sixth", "sixty", "sized", "sizes", "skate", "skein", "skies", "skiff", "skill", "skims", "skins", "skips", "skirt", "skulk", "skull", "skunk", "slabs", "slack", "slags", "slain", "slake", "slang", "slant", "slaps", "slash", "slate", "slats", "slave", "slays", "sleds", "sleek", "sleep", "sleet", "slept", "slice", "slick", "slide", "slily", "slime", "slimy", "sling", "slink", "slips", "slits", "sloop", "slope", "slops", "sloth", "slugs", "slump", "slums", "slung", "slunk", "slush", "slyly", "smack", "small", "smart", "smash", "smear", "smell", "smelt", "smile", "smirk", "smite", "smith", "smock", "smoke", "smoky", "smote", "snack", "snags", "snail", "snake", "snaky", "snaps", "snare", "snarl", "sneak", "sneer", "sniff", "snipe", "snobs", "snore", "snort", "snout", "snows", "snowy", "snuff", "soapy", "soars", "sober", "socks", "sofas", "soggy", "soils", "solar", "soles", "solid", "solos", "solve", "songs", "sonny", "sooth", "sooty", "sores", "sorry", "sorts", "sough", "souls", "sound", "soups", "souse", "south", "sowed", "sower", "space", "spade", "spake", "spank", "spans", "spare", "spark", "spars", "spasm", "spawn", "speak", "spear", "speck", "speed", "spell", "spelt", "spend", "spent", "sperm", "spice", "spicy", "spied", "spies", "spike", "spill", "spilt", "spine", "spins", "spiny", "spire", "spite", "spits", "split", "spoil", "spoke", "spook", "spool", "spoon", "spoor", "spore", "sport", "spots", "spout", "spray", "spree", "sprig", "spunk", "spurn", "spurs", "spurt", "squad", "squat", "squaw", "stabs", "stack", "staff", "stage", "stags", "staid", "stain", "stair", "stake", "stale", "stalk", "stall", "stamp", "stand", "stank", "stare", "stark", "stars", "start", "state", "stave", "stays", "stead", "steak", "steal", "steam", "steed", "steel", "steep", "steer", "stems", "steps", "stern", "stews", "stick", "stiff", "stile", "still", "sting", "stink", "stint", "stirs", "stock", "stoic", "stole", "stone", "stony", "stood", "stool", "stoop", "stops", "store", "stork", "storm", "story", "stout", "stove", "strap", "straw", "stray", "strew", "strip", "strut", "stuck", "studs", "study", "stuff", "stump", "stung", "stunt", "style", "suave", "sucks", "sugar", "suing", "suite", "suits", "sulks", "sulky", "sully", "sunny", "super", "surer", "surge", "surly", "swain", "swamp", "swans", "sward", "swarm", "sways", "swear", "sweat", "sweep", "sweet", "swell", "swept", "swift", "swill", "swims", "swine", "swing", "swirl", "swish", "swoon", "swoop", "sword", "swore", "sworn", "swung", "synod", "syrup", "tabby", "table", "taboo", "tacit", "tacks", "tails", "taint", "taken", "takes", "tales", "talks", "tally", "talon", "tamed", "tamer", "tanks", "taper", "tapes", "tardy", "tares", "tarry", "tarts", "tasks", "taste", "tasty", "taunt", "tawny", "taxed", "taxes", "teach", "teams", "tears", "tease", "teems", "teens", "teeth", "tells", "tempi", "tempo", "temps", "tends", "tenet", "tenor", "tense", "tenth", "tents", "tepee", "tepid", "terms", "terse", "tests", "testy", "texts", "thank", "theft", "their", "theme", "there", "these", "thick", "thief", "thigh", "thine", "thing", "think", "third", "thong", "thorn", "those", "three", "threw", "throb", "throe", "throw", "thumb", "thump", "thyme", "tiara", "tibia", "ticks", "tidal", "tides", "tiers", "tiger", "tight", "tilde", "tiled", "tiles", "tills", "tilts", "timed", "times", "timid", "tinge", "tints", "tipsy", "tired", "tires", "tithe", "title", "toads", "toast", "today", "toddy", "toils", "token", "tolls", "tombs", "tomes", "toned", "tones", "tongs", "tonic", "tools", "tooth", "topaz", "topic", "toque", "torch", "torso", "torts", "total", "totem", "touch", "tough", "tours", "towed", "towel", "tower", "towns", "toxic", "toyed", "trace", "track", "tract", "trade", "trail", "train", "trait", "tramp", "trams", "traps", "trash", "trays", "tread", "treat", "treed", "trees", "trend", "tress", "triad", "trial", "tribe", "trice", "trick", "tried", "tries", "trill", "tripe", "trips", "trite", "troll", "troop", "troth", "trots", "trout", "truce", "truck", "truer", "truly", "trump", "trunk", "truss", "trust", "truth", "tryst", "tubes", "tufts", "tulip", "tulle", "tuned", "tunes", "tunic", "turns", "tusks", "tutor", "twain", "twang", "tweed", "twice", "twigs", "twine", "twins", "twirl", "twist", "tying", "typed", "types", "udder", "ulcer", "ultra", "uncle", "uncut", "under", "undid", "undue", "unfit", "union", "unite", "units", "unity", "unsay", "untie", "until", "upper", "upset", "urban", "urged", "urges", "urine", "usage", "users", "usher", "using", "usual", "usurp", "usury", "utter", "vague", "vales", "valet", "valid", "value", "valve", "vanes", "vapid", "vases", "vault", "vaunt", "veils", "veins", "veldt", "venal", "venom", "vents", "venue", "verbs", "verge", "verse", "verve", "vests", "vexed", "vexes", "vials", "vicar", "vices", "video", "views", "vigil", "viler", "villa", "vines", "viola", "viper", "virus", "visit", "visor", "vista", "vital", "vivid", "vixen", "vizor", "vocal", "vodka", "vogue", "voice", "voile", "volts", "vomit", "voted", "voter", "votes", "vouch", "vowed", "vowel", "vying", "waded", "wafer", "wafts", "waged", "wager", "wages", "wagon", "waifs", "wails", "waist", "waits", "waive", "waked", "waken", "wakes", "walks", "walls", "waltz", "wands", "waned", "wanes", "wants", "wards", "wares", "warms", "warns", "warts", "wasps", "waste", "watch", "water", "waved", "waver", "waves", "waxed", "waxen", "waxes", "wears", "weary", "weave", "wedge", "weeds", "weedy", "weeks", "weeps", "weigh", "weird", "welch", "wells", "wench", "whack", "whale", "wharf", "wheat", "wheel", "whelp", "where", "which", "whiff", "while", "whims", "whine", "whips", "whirl", "whirr", "whisk", "whist", "white", "whole", "whoop", "whore", "whose", "wicks", "widen", "wider", "widow", "width", "wield", "wight", "wilds", "wiles", "wills", "wince", "winch", "winds", "windy", "wines", "wings", "winks", "wiped", "wipes", "wired", "wires", "wiser", "wisps", "witch", "witty", "wives", "woman", "women", "woods", "woody", "wooed", "wooer", "words", "wordy", "works", "world", "worms", "worry", "worse", "worst", "worth", "would", "wound", "wrack", "wraps", "wrapt", "wrath", "wreak", "wreck", "wrest", "wring", "wrist", "write", "writs", "wrong", "wrote", "wroth", "yacht", "yards", "yarns", "yawns", "yearn", "years", "yeast", "yells", "yelps", "yield", "yoked", "yokes", "yolks", "young", "yours", "youth", "zebra", "zones"];
const getRandomItem = <T>(array: Array<T>): T => array[Math.floor(Math.random() * array.length)];
const isValidKey = (k: string) => /^[a-z]$|^(Enter|Backspace)$/.test(k); // Checks for a-z, Enter, Backspace
const gameStats = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
} as { [key: number]: number };
let streak = 0;
const buildBoard = (numberOfTries: number = 6) => {
    const correctWord = getRandomItem(fullWordList);
    console.info('%c' + correctWord, 'font-size: 30px; color: blue; font-weight: bold; font-family: "Georgia", serif;');

    const keyboard = document.createElement('section');
    keyboard.classList.add('keyboard');
    keyboard.append(...[
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
    ].map(arr => {
        const keyRow = document.createElement('div');
        keyRow.append(...arr.map(k => {
            const button = document.createElement('button');
            button.type = 'button';
            if (k === 'Backspace') button.textContent = '←';
            else button.textContent = k;
            button.dataset.key = k;
            button.tabIndex = 0;
            button.ariaLabel = k;
            button.addEventListener('click', async () => await fireLetter(k));
            return button;
        }));
        keyboard.append(keyRow);
        return keyRow;
    }));

    const results: Array<Array<string>> = [];
    // Creates 5 row objects
    const wordRows = Array.from({ length: numberOfTries }, () => {
        const letterBoxes = Array.from({ length: 5 }, () => {
            const div = document.createElement('div');
            div.classList.add('letter-box');
            return div;
        });
        return {
            letterBoxes,
            evaluate(attemptedWord: string) {
                const result: Array<string> = [];
                letterBoxes.forEach((letterBox, index) => {
                    if (attemptedWord[index] === correctWord[index]) {
                        greenKeys.push(attemptedWord[index]);
                        letterBox.classList.add('green');
                        result.push('green');
                    }
                    else if (correctWord.includes(attemptedWord[index])) {
                        yellowKeys.push(attemptedWord[index]);
                        letterBox.classList.add('yellow');
                        result.push('yellow');
                    }
                    else {
                        grayKeys.push(attemptedWord[index]);
                        letterBox.classList.add('gray');
                        result.push('gray');
                    }
                });
                results.push(result);
            }
        };
    });

    // Create main element for the board
    const main = document.createElement('main');
    const board = document.createElement('section');
    board.classList.add('board');
    // Append all 25 divs. CSS grid takes care of formatting
    board.append(...wordRows.flatMap(wordRow => wordRow.letterBoxes.map(letterBox => letterBox)));
    main.append(board, keyboard);

    let isEndOfGame = false;
    let currentRowIndex = 0; // Keep track of current what turn / row the player is on
    const currentGuessStrArray: Array<string> = []; // Keep track of keys entered. Push and pop to account for backspace
    const grayKeys: Array<string> = [];
    const yellowKeys: Array<string> = [];
    const greenKeys: Array<string> = [];
    const currentRow = () => wordRows[currentRowIndex];
    const isRealWord = (attemptedWord: string) => fullWordList.includes(attemptedWord);
    const isFiveLetterWord = () => currentGuessStrArray.length === 5;

    const updateKeyboard = () => {
        for (const k of grayKeys) keyboard.querySelector(`[data-key="${k}"`)!.className = 'gray';
        for (const k of yellowKeys) keyboard.querySelector(`[data-key="${k}"`)!.className = 'yellow';
        for (const k of greenKeys) keyboard.querySelector(`[data-key="${k}"`)!.className = 'green';
    };
    const shakeCurrentRow = () => {
        currentRow().letterBoxes.forEach(letterBox => letterBox.classList.add('shake'));
        setTimeout(() => currentRow().letterBoxes.forEach(letterBox => letterBox.classList.remove('shake')), 600);
    };
    const renderLetters = () => {
        currentRow().letterBoxes.forEach((letterBox, index) => letterBox.textContent = currentGuessStrArray[index] ?? '');
    };

    const fireLetter = async (k: string) => {
        if (isEndOfGame) return;
        if (!isValidKey(k)) return;

        const button = keyboard.querySelector(`button[data-key="${k}"`);
        button?.classList.add('fired');
        setTimeout(() => button?.classList.remove('fired'), 100);

        const isLetter = k !== 'Enter' && k !== 'Backspace';
        if (isLetter) {
            if (isFiveLetterWord()) return;
            currentGuessStrArray.push(k);
            renderLetters();
            return;
        }

        if (k === 'Backspace') {
            currentGuessStrArray.pop();
            renderLetters();
            return;
        }

        const attemptedWord = currentGuessStrArray.join('');
        // If we got here 'Enter' has been pressed
        if (!isFiveLetterWord() || !isRealWord(attemptedWord)) {
            shakeCurrentRow();
            return;
        }

        currentRow().evaluate(attemptedWord);

        if (attemptedWord === correctWord) {
            streak++;
            isEndOfGame = true;
            updateKeyboard();
            gameStats[currentRowIndex + 1]++;
            await flourish(currentRow().letterBoxes)
            playAgainModal(buildResultDisplay(correctWord, results));
            return;
        }

        // Advance to next row
        updateKeyboard();
        currentGuessStrArray.length = 0;
        currentRowIndex++;
        if (currentRowIndex >= numberOfTries) {
            streak = 0;
            isEndOfGame = true;
            gameStats[7]++;
            await defeatAnimation(wordRows.flatMap(row => row.letterBoxes));
            playAgainModal(buildResultDisplay(correctWord, results));
            return;
        }
    };

    document.body.onkeydown = async (e: KeyboardEvent) => await fireLetter(e.key);
    return main;
};
const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
const flourish = async (letterBoxes: Array<HTMLDivElement>) => {
    for (const letterBox of letterBoxes) {
        letterBox.classList.add('flourish');
        await sleep(200);
    }
    await sleep(1000);
};
const defeatAnimation = async (letterBoxes: Array<HTMLDivElement>) => {
    for (const letterBox of letterBoxes) {
        letterBox.style.backgroundColor = 'darkred';
        letterBox.style.borderColor = 'darkred';
        await sleep(50);
    }
    await sleep(500);
};
const playAgainModal = ({ resultDisplayContainer, textToCopy }: { resultDisplayContainer: HTMLDivElement; textToCopy: string }) => {
    const dialog = document.createElement('dialog');
    const contentDiv = document.createElement('div');
    const buttonDiv = document.createElement('div');
    const playAgainButton = document.createElement('button');
    const copyResultButton = document.createElement('button');
    const messageP = document.createElement('p');
    if (streak) {
        messageP.textContent = `You won! Current streak: ${streak}`;
    }
    else {
        messageP.textContent = `You lost.`;
    }

    contentDiv.classList.add('modal-content-div');
    buttonDiv.classList.add('modal-button-div');
    playAgainButton.textContent = 'Play Again';
    copyResultButton.textContent = 'Copy Result';
    playAgainButton.type = 'button';
    copyResultButton.type = 'button';
    dialog.addEventListener('cancel', (e) => e.preventDefault());
    dialog.addEventListener('keydown', (e) => e.preventDefault());
    playAgainButton.addEventListener('click', start);
    copyResultButton.addEventListener('click', async () => {
        await navigator.clipboard.writeText(textToCopy);
        copyResultButton.textContent = 'Result copied to clipboard';
        await sleep(2000);
        copyResultButton.textContent = 'Copy Result';
    });
    buttonDiv.append(playAgainButton, copyResultButton);
    dialog.append(contentDiv, buttonDiv);
    contentDiv.append(messageP, resultDisplayContainer);
    document.body.append(dialog);
    dialog.showModal();
};

const buildStatsDisplay = () => {
    const container = document.createElement('div');
    container.append(...Object.entries(gameStats).map(([key, val]) => {
        const div = document.createElement('div');
        div.textContent = `${key} attempts: ${val}`;
        return div;
    }));
    return container;
};
const buildResultDisplay = (correctWord: string, results: Array<Array<string>>) => {
    const resultDisplayContainer = document.createElement('div');

    const correctWordP = document.createElement('p');
    let textToCopy = `${correctWord.toUpperCase()}\n`;
    resultDisplayContainer.classList.add('results');
    correctWordP.textContent = correctWord;
    resultDisplayContainer.append(correctWordP);
    for (const arr of results) {
        const row = document.createElement('div');
        for (const color of arr) {
            const div = document.createElement('div');
            div.classList.add(color);
            row.append(div);
            if (color === 'green') textToCopy += '🟩';
            if (color === 'yellow') textToCopy += '🟨';
            if (color === 'gray') textToCopy += '⬜';
        }
        textToCopy += '\n';
        resultDisplayContainer.append(row);
    }
    return { resultDisplayContainer, textToCopy };
};


const start = () => document.body.replaceChildren(buildBoard(6));
start();

