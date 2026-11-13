// ==========================================
// 1. CONFIGURATION & BINGO CARD LINKS (1-100)
// ==========================================
// 1. PASTE YOUR TWO STRIPE PAYMENT LINKS HERE:
const STRIPE_DONATION_LINK = "https://stripe.com";
const STRIPE_BINGO_LINK = "https://stripe.com";

// Replace each placeholder URL with the unique link for that Bingo card:
const BINGO_CARD_LINKS = {
    1: "https://bingobaker.com/#6af395d90403ee3f",
    2: "https://bingobaker.com/#6af5e6ca21812ccf",
    3: "https://bingobaker.com/#6af5e6db300ac86a",
    4: "https://bingobaker.com/#6af5e6ed6d772866",
    5: "https://bingobaker.com/#6af5e6fb0f1a724b",
    6: "https://bingobaker.com/#6af5e7123fa81836",
    7: "https://bingobaker.com/#6af5e72394aeae8e",
    8: "https://bingobaker.com/#6af5e72394aeae8e",
    9: "https://bingobaker.com/#6af5e754777b7131",
    10: "https://bingobaker.com/#6af5e77e021410cb",
    11: "https://bingobaker.com/#6af5e796b72958e9",
    12: "https://bingobaker.com/#6af5f0f87bdc242d",
    14: "https://bingobaker.com/#6af5f106c164891c",
    15: "https://bingobaker.com/#6af5f1137f697b79",
    16: "https://bingobaker.com/#6af5f11fe613e1b4",
    17: "https://bingobaker.com/#6af5f1316f4b85c7",
    18: "https://bingobaker.com/#6af5f13f3ac3159d",
    19: "https://bingobaker.com/#6af5f155564bcc12",
    20: "https://bingobaker.com/#6af5f155564bcc12",
    21: "https://bingobaker.com/#6af5f186b2d396d8",
    22: "https://bingobaker.com/#6af5f1951d041229",
    23: "https://bingobaker.com/#6af5f1a73c96a71c",
    24: "https://bingobaker.com/#6af5f1b6ea9ace73",
    25: "https://bingobaker.com/#6af5f1ca997cde00",
    26: "https://bingobaker.com/#6af5f1debc245bc1",
    27: "https://bingobaker.com/#6af5f1ed716cb10e",
    28: "https://bingobaker.com/#6af63d9a214af9a6",
    29: "https://bingobaker.com/#6af63da99e033ade",
    30: "https://bingobaker.com/#6af63dbae7b4bbc4",
    31: "https://bingobaker.com/#6af63dd1712d61e8",
    32: "https://bingobaker.com/#6af63de4d6349b5c",
    33: "https://bingobaker.com/#6af63df1bcca8af2",
    34: "https://bingobaker.com/#6af63dfe543773ec",
    35: "https://bingobaker.com/#6af63e91abda68de",
    36: "https://bingobaker.com/#6af63ebac7031a2b",
    37: "https://bingobaker.com/#6af63ecd3a74f742",
    38: "https://bingobaker.com/#6af63edc2b57fa62",
    39: "https://bingobaker.com/#6af63eeb7c58c7e0",
    40: "https://bingobaker.com/#6af63efae16cd4da",
    41: "https://bingobaker.com/#6af63f0bc6309000",
    42: "https://bingobaker.com/#6af63f20fdaa60b3",
    43: "https://bingobaker.com/#6af63f338607cabc",
    44: "https://bingobaker.com/#6af63f40be7365a1",
    45: "https://bingobaker.com/#6af63f4d45908031",
    46: "https://bingobaker.com/#6af63f5ce824ded1",
    47: "https://bingobaker.com/#6af63f6b99e06274",
    48: "https://bingobaker.com/#6af63f7ba9f1745e",
    49: "https://bingobaker.com/#6af6417c615c95c6",
    50: "https://bingobaker.com/#6af6418c8b71d6a6",
    51: "https://bingobaker.com/#6af6419df0fb713d",
    52: "https://bingobaker.com/#6af641c7084cf9b2",
    53: "https://bingobaker.com/#6af641fa5c4ae88d",
    54: "https://bingobaker.com/#6af64206c671da9a",
    55: "https://bingobaker.com/#6af642139c1f3661",
    56: "https://bingobaker.com/#6af642206a08f5e9",
    57: "https://bingobaker.com/#6af6422fda8e0c3b",
    58: "https://bingobaker.com/#6af6424230956f89",
    59: "https://bingobaker.com/#6af6425293f3f638",
    60: "https://bingobaker.com/#6af642609d615a3b",
    61: "https://bingobaker.com/#6af642bdbc4ba03b",
    62: "https://bingobaker.com/#6af642d892d446e1",
    63: "https://bingobaker.com/#6af642fbe5ac5b44",
    64: "https://bingobaker.com/#6af64324186f1ca0",
    65: "https://bingobaker.com/#6af6435996ffdc0c",
    66: "https://bingobaker.com/#6af64375d883b173",
    67: "https://bingobaker.com/#6af64388b4802e22",
    68: "https://bingobaker.com/#6af6439797341767",
    69: "https://bingobaker.com/#6af643ab53b70afe",
    70: "https://bingobaker.com/#6af643e18c62c30d",
    71: "https://bingobaker.com/#6af643f55af43162",
    72: "https://bingobaker.com/#6af64434a309cc77",
    73: "https://bingobaker.com/#6af6444875eb572f",
    74: "https://bingobaker.com/#6af644601677cddf",
    75: "https://bingobaker.com/#6af6447886bb46c5",
    76: "https://bingobaker.com/#6af6448ed18227fc",
    77: "https://bingobaker.com/#6af6449d5b1023d1",
    78: "https://bingobaker.com/#6af644b943926016",
    79: "https://bingobaker.com/#6af644dbfc2600cf",
    80: "https://bingobaker.com/#6af644f1c2d36b27",
    81: "https://bingobaker.com/#6af64502e7021e83",
    82: "https://bingobaker.com/#6af64511c811c9c0",
    83: "https://bingobaker.com/#6af64520f0d0df24",
    84: "https://bingobaker.com/#6af6452c27cc401b",
    85: "https://bingobaker.com/#6af64541b5bcc4e9",
    86: "https://bingobaker.com/#6af6454f246f3346",
    87: "https://bingobaker.com/#6af64561e59b4d2d",
    88: "https://bingobaker.com/#6af6456d3149da98",
    89: "https://bingobaker.com/#6af6457f957418d4",
    90: "https://bingobaker.com/#6af645923e5283d7",
    91: "https://bingobaker.com/#6af645a4464daeea",
    92: "https://bingobaker.com/#6af645bec62d124a",
    93: "https://bingobaker.com/#6af645c9b5b18078",
    94: "https://bingobaker.com/#6af645e34e96a352",
    95: "https://bingobaker.com/#6af645feaff2c4ad",
    96: "https://bingobaker.com/#6af646163e874807",
    97: "https://bingobaker.com/#6af64642528058a1",
    98: "https://bingobaker.com/#6af6465148115e73",
    99: "https://bingobaker.com/#6af6465f71af8653",
    100: "https://bingobaker.com/#6af64671a96b35c2"
};

const BINGO_TARGET_TIME = new Date('2026-11-20T16:30:00-07:00').getTime();

// ==========================================
// 2. STATE & 1–100 BINGO INVENTORY POOL
// ==========================================
let contributions = JSON.parse(localStorage.getItem('deca_contributions')) || [];
let selectedPreset = null;

function getAvailableBingoPool() {
    const saved = localStorage.getItem('deca_bingo_pool');
    if (saved) return JSON.parse(saved);

    const freshPool = Array.from({ length: 100 }, (_, i) => i + 1);
    localStorage.setItem('deca_bingo_pool', JSON.stringify(freshPool));
    return freshPool;
}

function allocateUniqueBingoCard() {
    let pool = getAvailableBingoPool();
    if (pool.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * pool.length);
    const pickedNumber = pool.splice(randomIndex, 1)[0];

    localStorage.setItem('deca_bingo_pool', JSON.stringify(pool));
    return pickedNumber;
}

function showBingoSuccessScreen(cardNumber) {
    const uniqueUrl = BINGO_CARD_LINKS[cardNumber] || `https://your-link.com{cardNumber}`;

    hideAllViews();
    const linkEl = document.getElementById('revealed-card-link');
    const openBtn = document.getElementById('open-card-btn');

    linkEl.href = uniqueUrl;
    linkEl.innerText = uniqueUrl;
    openBtn.href = uniqueUrl;

    document.getElementById('view-bingo-success').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function copyRevealedCardLink() {
    const url = document.getElementById('revealed-card-link').innerText;
    navigator.clipboard.writeText(url).then(() => {
        showToast('Bingo card link copied!');
    });
}
function updateBingoCountdown() {
    const diff = Math.max(0, BINGO_TARGET_TIME - Date.now());
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    const days = String(Math.floor(totalHours / 24)).padStart(2, '0');
    const hours = String(totalHours % 24).padStart(2, '0');

    const dayTens = document.getElementById('day-tens');
    if (dayTens) {
        dayTens.innerText = days.charAt(0);
        document.getElementById('day-units').innerText = days.charAt(1);
        document.getElementById('hour-tens').innerText = hours.charAt(0);
        document.getElementById('hour-units').innerText = hours.charAt(1);
    }

    const purchaseBtn = document.getElementById('bingo-purchase-btn');
    const closedMsg = document.getElementById('bingo-closed-msg');
    if (purchaseBtn && closedMsg) {
        if (diff === 0) {
            purchaseBtn.classList.add('hidden');
            closedMsg.classList.remove('hidden');
        } else {
            purchaseBtn.classList.remove('hidden');
            closedMsg.classList.add('hidden');
        }
    }
}

updateBingoCountdown();
setInterval(updateBingoCountdown, 10000);

// ==========================================
// 3. NAVIGATION & UI CONTROLS
// ==========================================
function toggleMenu() {
    const drawer = document.getElementById('nav-drawer');
    if (drawer) drawer.classList.toggle('hidden');
}

function hideAllViews() {
    ['view-home', 'view-record', 'view-leaderboard', 'view-bingo', 'view-bingo-purchase', 'view-bingo-success'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
}

function navigateTo(page) {
    hideAllViews();
    const headerTitle = document.getElementById('header-title');

    if (page === 'home') {
        document.getElementById('view-home').classList.remove('hidden');
        headerTitle.innerText = 'Valor DECA 10/10/10';
        document.getElementById('nav-home').classList.add('active');
    } else if (page === 'leaderboard') {
        document.getElementById('view-leaderboard').classList.remove('hidden');
        headerTitle.innerText = 'Leaderboard';
        document.getElementById('nav-leaderboard').classList.add('active');
        renderLeaderboards();
    } else if (page === 'bingo') {
        document.getElementById('view-bingo').classList.remove('hidden');
        headerTitle.innerText = 'Valor DECA 10/10/10';
        document.getElementById('nav-bingo').classList.add('active');
    }
    document.getElementById('nav-drawer').classList.add('hidden');
}

// ==========================================
// 4. QUICK DONATE & LIVE PAYMENT
// ==========================================
function selectPresetAmount(amount, btn) {
    selectedPreset = amount;
    document.getElementById('quick-custom-amount').value = '';
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function clearPresetSelection() {
    selectedPreset = null;
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('selected'));
}

function handleLiveDonate() {
    const customVal = parseFloat(document.getElementById('quick-custom-amount').value);
    const finalAmount = customVal || selectedPreset;
    const rawName = document.getElementById('quick-donor-name').value.trim() || 'Online Donor';
    const isPublic = document.getElementById('quick-is-public').checked;

    if (!finalAmount || finalAmount <= 0) {
        showToast('Please select or enter a donation amount.');
        return;
    }

    processLiveCheckout({
        type: 'donation',
        name: isPublic ? rawName : 'Anonymous Contributor',
        amount: finalAmount,
        description: 'Live Online Donation'
    });
}

function processLiveCheckout(pendingItem) {
    localStorage.setItem('deca_pending_donation', JSON.stringify(pendingItem));

    // Route Bingo purchases to the fixed $5.00 Stripe link
    if (pendingItem.type === 'bingo') {
        if (STRIPE_BINGO_LINK.includes("YOUR_BINGO_LINK")) {
            if (confirm('Demo Checkout: Process $5.00 Bingo Card purchase for ' + pendingItem.name + '?')) {
                completePendingDonation();
            }
            return;
        }
        window.location.href = STRIPE_BINGO_LINK;
        return;
    }

    // Route general donations to the variable Stripe link with prefilled amount
    if (STRIPE_DONATION_LINK.includes("YOUR_DONATION_LINK")) {
        if (confirm('Demo Checkout: Process $' + pendingItem.amount.toFixed(2) + ' donation for ' + pendingItem.name + '?')) {
            completePendingDonation();
        }
        return;
    }

    const amountInCents = Math.round(pendingItem.amount * 100);
    window.location.href = STRIPE_DONATION_LINK + '?__prefilled_amount=' + amountInCents;
}


function completePendingDonation() {
    const savedPending = JSON.parse(localStorage.getItem('deca_pending_donation'));
    if (!savedPending) return;

    let finalDescription = savedPending.description || 'Live Online Donation';
    let assignedCardNumber = null;

    if (savedPending.type === 'bingo') {
        assignedCardNumber = allocateUniqueBingoCard();
        if (!assignedCardNumber) {
            showToast('Sorry, all Bingo cards are sold out!');
            localStorage.removeItem('deca_pending_donation');
            return;
        }

        const hiddenInput = document.getElementById('hidden-generated-cards');
        if (hiddenInput) hiddenInput.value = assignedCardNumber;
        finalDescription = `Bingo Card Purchase (Card #${assignedCardNumber})`;
    }

    const today = new Date();
    contributions.push({
        id: Date.now(),
        name: savedPending.name,
        category: 'money',
        description: finalDescription,
        amount: savedPending.amount,
        date: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    });

    localStorage.setItem('deca_contributions', JSON.stringify(contributions));
    localStorage.removeItem('deca_pending_donation');

    clearPresetSelection();
    document.getElementById('quick-custom-amount').value = '';
    document.getElementById('quick-donor-name').value = '';

    if (savedPending.type === 'bingo' && assignedCardNumber) {
        showBingoSuccessScreen(assignedCardNumber);
        showToast('$5.00 added to leaderboard!');
    } else {
        navigateTo('leaderboard');
        showToast(`Thank you! $${savedPending.amount.toFixed(2)} recorded on leaderboard.`);
    }
}

// ==========================================
// 5. MANUAL RECORDING FORMS
// ==========================================
function fillTodayDate() {
    const today = new Date();
    document.getElementById('date-month').value = today.getMonth() + 1;
    document.getElementById('date-day').value = today.getDate();
    document.getElementById('date-year').value = today.getFullYear();
}

function openRecordForm(type) {
    hideAllViews();
    document.getElementById('contribution-form').reset();
    document.getElementById('is-public').checked = true;
    document.getElementById('entry-type').value = type;

    const title = document.getElementById('form-page-title');
    const amountLabel = document.getElementById('amount-label-text');
    const amountInput = document.getElementById('entry-amount');

    if (type === 'money') {
        title.innerText = 'Record a Contribution';
        amountLabel.innerText = 'Dollar Amount';
        amountInput.step = '0.01';
    } else if (type === 'hours') {
        title.innerText = 'Record Volunteer Hours';
        amountLabel.innerText = 'Hours';
        amountInput.step = '0.5';
    } else if (type === 'food') {
        title.innerText = 'Record Food Contribution';
        amountLabel.innerText = 'Quantity (lb)';
        amountInput.step = '0.1';
    }

    fillTodayDate();
    document.getElementById('view-record').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function submitContribution(e) {
    e.preventDefault();
    const type = document.getElementById('entry-type').value;
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const fullName = `${firstName} ${lastName}`;
    const description = document.getElementById('entry-description').value.trim();
    const isPublic = document.getElementById('is-public').checked;
    const amount = parseFloat(document.getElementById('entry-amount').value);

    const month = document.getElementById('date-month').value;
    const day = document.getElementById('date-day').value;
    const year = document.getElementById('date-year').value;

    contributions.push({
        id: Date.now(),
        name: isPublic ? fullName : 'Anonymous Contributor',
        category: type,
        description: description,
        amount: amount,
        date: `${month}/${day}/${year}`
    });

    localStorage.setItem('deca_contributions', JSON.stringify(contributions));
    navigateTo('leaderboard');
    showToast('Contribution submitted!');
}

// ==========================================
// 6. BINGO CARD PURCHASE & INVENTORY
// ==========================================
function openBingoPurchase() {
    if (Date.now() >= BINGO_TARGET_TIME) {
        showToast('Bingo card sales have closed!');
        return;
    }
    const remaining = getAvailableBingoPool().length;
    if (remaining === 0) {
        showToast('All 100 Bingo cards have been sold out!');
        return;
    }
hideAllViews();
document.getElementById('bingo-purchase-form').reset();
document.getElementById('bingo-is-public').checked = true;
const hiddenInput = document.getElementById('hidden-generated-cards');
if (hiddenInput) hiddenInput.value = '';
document.getElementById('bingo-stock-badge').innerText = remaining + ' of 100 cards remaining';
document.getElementById('view-bingo-purchase').classList.remove('hidden');
window.scrollTo(0, 0);
}
function submitBingoPurchase(e) {
e.preventDefault();
const remaining = getAvailableBingoPool().length;
if (remaining < 1) {
showToast('Sorry, all Bingo cards are sold out!');
return;
}
const rawBuyerName = document.getElementById('bingo-buyer-name').value.trim();
const isPublic = document.getElementById('bingo-is-public').checked;
processLiveCheckout({
type: 'bingo',
qty: 1,
name: isPublic ? rawBuyerName : 'Anonymous Contributor',
amount: 5.00,
description: 'Bingo Card Purchase (1x)'
});
}
// ==========================================
// 7. LEADERBOARD & COUNTDOWN
// ==========================================
function renderLeaderboards() {
    renderCategory('money', 'leaderboard-money', 'No Money contributions yet', val => '$' + val.toFixed(2));
    renderCategory('food', 'leaderboard-food', 'No Food contributions yet', val => val + ' lb');
    renderCategory('hours', 'leaderboard-hours', 'No Volunteer Hours contributions yet', val => val + ' hrs');
}

function renderCategory(category, containerId, emptyText, formatFn) {
    const container = document.getElementById(containerId);
    const filtered = contributions.filter(c => c.category === category);

    if (filtered.length === 0) {
        container.innerHTML =
            '<div class="empty-state">' +
                '<div class="empty-icon">' +
                    '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />' +
                    '</svg>' +
                '</div>' +
                '<div class="empty-title">' + emptyText + '</div>' +
                '<div class="empty-desc">Contributor rankings will appear when public entries are recorded.</div>' +
            '</div>';
        return;
    }

    const totals = {};
    filtered.forEach(item => { totals[item.name] = (totals[item.name] || 0) + item.amount; });
    const sorted = Object.entries(totals)
           const rowsHtml = sorted.map((person, index) => {
        const badgeClass = index === 0 ? 'rank-badge top' : 'rank-badge';
        return '<div class="ranking-row">' +
            '<div class="rank-info">' +
                '<span class="' + badgeClass + '">' + (index + 1) + '</span>' +
                '<span class="rank-name">' + person.name + '</span>' +
            '</div>' +
            '<span class="rank-score">' + formatFn(person.total) + '</span>' +
        '</div>';
    }).join('');

    container.innerHTML = '<div class="ranking-list">' + rowsHtml + '</div>';
}
