// ==========================================
// 1. CONFIGURATION & BINGO CARD LINKS (1-100)
// ==========================================
// 1. PASTE YOUR TWO STRIPE PAYMENT LINKS HERE:
const STRIPE_DONATION_LINK = "https://stripe.com";
const STRIPE_BINGO_LINK = "https://stripe.com";
const ADMIN_PASSCODE = "DECA2026";

const firebaseConfig = {
  apiKey: "AIzaSyAOuzBOY_6foe65E4kp03yD9G_pIo_R1Tc",
  authDomain: "deca-10-10-10-database.firebaseapp.com",
  databaseURL: "https://deca-10-10-10-database-default-rtdb.firebaseio.com",
  projectId: "deca-10-10-10-database",
  storageBucket: "deca-10-10-10-database.firebasestorage.app",
  messagingSenderId: "761736898594",
  appId: "1:761736898594:web:1dddb628ad03309415427b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();



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
// 2. STATE & 1-100 BINGO INVENTORY POOL (FIREBASE SYNC)
// ==========================================
let contributions = [];
let claimedCards = {}; // Stores { "1": true, "42": true, ... } from Firebase
let selectedPreset = null;

// Listen for real-time updates to all contributions & bingo purchases across devices
db.ref('contributions').on('value', (snapshot) => {
  const data = snapshot.val();
  contributions = data ? Object.values(data) : [];
  renderLeaderboards();
  if (!document.getElementById('view-admin-bingo').classList.contains('hidden')) {
    renderAdminBingoPurchases();
  }
});

// Listen for real-time updates to claimed Bingo cards (1–100)
db.ref('claimedCards').on('value', (snapshot) => {
  claimedCards = snapshot.val() || {};
  const badge = document.getElementById('bingo-stock-badge');
  if (badge) {
    badge.innerText = `${getAvailableBingoPool().length} of 100 cards remaining`;
  }
});

function getAvailableBingoPool() {
  const available = [];
  for (let i = 1; i <= 100; i++) {
    if (!claimedCards[i]) {
      available.push(i);
    }
  }
  return available;
}

// Atomically claims a random unclaimed card in Firebase so two devices never get the same card
async function allocateUniqueBingoCard() {
  const pool = getAvailableBingoPool();
  if (pool.length === 0) return null;

  // Shuffle available numbers
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  for (const candidate of pool) {
    const result = await db.ref(`claimedCards/${candidate}`).transaction((current) => {
      if (current === null) {
        return true; // Claim this card number
      }
      return; // Abort transaction if another device just claimed it
    });

    if (result.committed) {
      return candidate;
    }
  }

  return null; // All cards claimed
}

// ==========================================
// 3. NAVIGATION & UI CONTROLS
// ==========================================
function toggleMenu() {
    const drawer = document.getElementById('nav-drawer');
    if (drawer) drawer.classList.toggle('hidden');
}

function hideAllViews() {
  ['view-home', 'view-record', 'view-leaderboard', 'view-bingo', 'view-bingo-purchase', 'view-bingo-success', 'view-admin-bingo'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
}

function navigateTo(page) {
  if (page === 'admin-bingo') {
    const isUnlocked = sessionStorage.getItem('deca_admin_unlocked') === 'true';
    if (!isUnlocked) {
      const entered = prompt('Enter Admin Passcode:');
      if (entered === null) return; // User clicked Cancel
      if (entered !== ADMIN_PASSCODE) {
        showToast('Incorrect admin passcode.');
        return;
      }
      sessionStorage.setItem('deca_admin_unlocked', 'true');
    }
  }

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
  } else if (page === 'admin-bingo') {
    document.getElementById('view-admin-bingo').classList.remove('hidden');
    document.getElementById('nav-admin-bingo').classList.add('active');
    renderAdminBingoPurchases();
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


async function completePendingDonation() {
  const savedPending = JSON.parse(localStorage.getItem('deca_pending_donation'));
  if (!savedPending) return;

  let finalDescription = savedPending.description || 'Live Online Donation';
  let assignedCardNumber = null;

  if (savedPending.type === 'bingo') {
    assignedCardNumber = await allocateUniqueBingoCard();
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
  const newEntryRef = db.ref('contributions').push();
  await newEntryRef.set({
    id: Date.now(),
    name: savedPending.name,
    realName: savedPending.realName || savedPending.name,
    category: 'money',
    description: finalDescription,
    cardNumber: assignedCardNumber,
    amount: savedPending.amount,
    date: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
  });

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

  db.ref('contributions').push({
    id: Date.now(),
    name: isPublic ? fullName : 'Anonymous Contributor',
    realName: fullName,
    category: type,
    description: description,
    amount: amount,
    date: `${month}/${day}/${year}`
  });

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
    realName: rawBuyerName,
    amount: 5.00,
    description: 'Bingo Card Purchase (1x)'
  });
}

// ==========================================
// 7. LEADERBOARD
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

// ==========================================
// 8. ADMIN BINGO PURCHASES LOG
// ==========================================
function renderAdminBingoPurchases() {
  const container = document.getElementById('admin-bingo-list');
  const summary = document.getElementById('admin-bingo-summary');
  const sortOrder = document.getElementById('admin-bingo-sort').value;

  // Filter for Bingo Card purchases (supports both new cardNumber field and older entries)
  const bingoPurchases = contributions.filter(c =>
    c.cardNumber || (c.description && c.description.startsWith('Bingo Card Purchase'))
  );

  const totalRevenue = bingoPurchases.reduce((sum, item) => sum + item.amount, 0);
  summary.innerText = `${bingoPurchases.length} / 100 Sold ($${totalRevenue.toFixed(2)})`;

  if (bingoPurchases.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-title">No Bingo Purchases Yet</div>
        <div class="empty-desc">Purchased cards will appear here in chronological order.</div>
      </div>
    `;
    return;
  }

  // Sort by exact timestamp (id = Date.now())
  const sorted = [...bingoPurchases].sort((a, b) =>
    sortOrder === 'newest' ? b.id - a.id : a.id - b.id
  );

  container.innerHTML = sorted.map(item => {
    // Extract card number if missing on older records
    const cardNum = item.cardNumber || (item.description.match(/Card #(\d+)/) || [])[1];
    const cardUrl = cardNum ? BINGO_CARD_LINKS[cardNum] : null;
    const displayName = item.realName || item.name;
    const timeStr = new Date(item.id).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    return `
      <div class="ranking-row" style="align-items: flex-start; gap: 10px;">
        <div style="flex: 1;">
          <div style="font-weight: 700; font-size: 14px; color: #0f172a;">
            ${displayName}
            ${item.name === 'Anonymous Contributor' ? '<span style="font-size: 11px; font-weight: 500; color: #64748b;">(Hidden on Leaderboard)</span>' : ''}
          </div>
          <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
            Purchased: <strong>${item.date}</strong> at ${timeStr}
          </div>
          ${cardUrl ? `<a href="${cardUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 12px; color: #2563eb; text-decoration: underline; display: inline-block; margin-top: 4px;">Card #${cardNum} Link &nearr;</a>` : ''}
        </div>
        <div style="text-align: right;">
          <span class="rank-badge rank-badge-top">Card #${cardNum || '?'}</span>
          <div class="rank-score" style="margin-top: 4px;">$${item.amount.toFixed(2)}</div>
        </div>
      </div>
    `;
  }).join('');
}
function lockAdminView() {
  sessionStorage.removeItem('deca_admin_unlocked');
  navigateTo('home');
  showToast('Admin view locked.');
}

// ==========================================
// 9. GENERIC PAYMENT REDIRECT RETURN HANDLER
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));

  const paymentStatus = urlParams.get('payment') || hashParams.get('payment');
  const hasPendingDonation = Boolean(localStorage.getItem('deca_pending_donation'));

  if (paymentStatus === 'success' && hasPendingDonation) {
    // Clean the URL first so refreshing the page does not re-trigger the reward
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);

    // Claim the unique Bingo card (if applicable) and save to Firebase
    completePendingDonation();
  } else if (paymentStatus === 'cancel') {
    // Optional: clean URL and notify user if they canceled at checkout
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
    localStorage.removeItem('deca_pending_donation');
    showToast('Payment was canceled.');
  }
});

// ==========================================
// 10. BINGO COUNTDOWN TIMER (DEC 1, 2026 @ 4:00 PM MST)
// ==========================================
const BINGO_DEADLINE = new Date("2026-12-01T16:00:00-07:00").getTime();

function updateBingoCountdown() {
  const timerEl = document.getElementById("bingo-countdown"); // Match your HTML timer element ID
  if (!timerEl) return;

  const now = Date.now();
  const distance = BINGO_DEADLINE - now;

  if (distance <= 0) {
    timerEl.innerText = "Bingo Sales Closed";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateBingoCountdown();
setInterval(updateBingoCountdown, 1000);
