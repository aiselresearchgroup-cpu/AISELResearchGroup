/* ==========================================================
   AISEL — PARTNERS & FUNDING SECTION JS

   Placeholder slots only — no real partner names or logo files
   were provided, so nothing here claims a real affiliation.
   Each entry currently renders as a plain text label; once you
   have real logo image files, add them under assets/images/partners/
   and set `logo` to that path — the label is used as alt text.

   Called by the loader in index.html as initPartners().
========================================================== */

const partners = {
  universities: ['Add university', 'Add university', 'Add university'],
  funding: ['Add funding agency', 'Add funding agency'],
  industry: ['Add industry partner', 'Add industry partner', 'Add industry partner'],
};

function renderPartnerGroup(mountId, names){
  const mount = document.getElementById(mountId);
  mount.innerHTML = names.map(name => `
    <div class="partner-logo" title="${name}">
      <span>${name}</span>
    </div>
  `).join('');
}

function initPartners(){
  renderPartnerGroup('partnersUniversities', partners.universities);
  renderPartnerGroup('partnersFunding', partners.funding);
  renderPartnerGroup('partnersIndustry', partners.industry);
}
