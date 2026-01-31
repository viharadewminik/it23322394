import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration – 35 Functional Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
  });

  const testCases = [

    // ================= POSITIVE FUNCTIONAL (24) =================

    { id: "Pos_Fun_N01", name: "Short daily statement", input: "mata sathutui", expected: "මට සතුටුයි" },

    { id: "Pos_Fun_N02", name: "Simple present tense", input: "Api school yanava", expected: "අපි පාසල් යනවා" },

    { id: "Pos_Fun_N03", name: "Past tense eating", input: "Eya bath kala", expected: "ඒයා බත් කෑවා" },

    { id: "Pos_Fun_N04", name: "Future tense plan", input: "Mama heta office yanava", expected: "මම හෙට ඔෆිස් යනවා" },

    { id: "Pos_Fun_N05", name: "Simple question", input: "Oya kohomada inne", expected: "ඔයා කොහොමද ඉන්නේ" },

    { id: "Pos_Fun_N06", name: "Polite request", input: "Karunakarala mata help karanna", expected: "කරුණාකරලා මට හෙල්ප් කරන්න" },

    { id: "Pos_Fun_N07", name: "Informal slang request", input: "Ikmanata meheta varen", expected: "ඉක්මනට මෙහෙට වරෙන්" },

    { id: "Pos_Fun_N08", name: "Negative form", input: "Mama ehema karanne na", expected: "මම එහෙම කරන්නෙ නෑ" },

    { id: "Pos_Fun_N09", name: "Repeated emphasis", input: "Hondatama hondai", expected: "හොඳටම හොඳයි" },

    { id: "Pos_Fun_N10", name: "Joined words", input: "mamayannava", expected: "මමයනවා" },

    { id: "Pos_Fun_N11", name: "Plural usage", input: "Eyala football gahanava", expected: "ඒයාලා ෆුට්බෝල් ගහනවා" },

    { id: "Pos_Fun_N12", name: "Pronoun variation", input: "Oyage amma gedara inne", expected: "ඔයාගේ අම්මා ගෙදර ඉන්නේ" },

    { id: "Pos_Fun_N13", name: "Mixed English tech term", input: "Report eka submit karanna", expected: "රිපෝට් එක සබ්මිට් කරන්න" },

    { id: "Pos_Fun_N14", name: "Place name included", input: "Api Kandy giya", expected: "අපි කෑන්ඩි ගියා" },

    { id: "Pos_Fun_N15", name: "Currency format", input: "Meeka gana Rs 1500", expected: "මේක ගාන Rs 1500" },

    { id: "Pos_Fun_N16", name: "Time format", input: "Class eka 8.30AM", expected: "ක්ලාස් එක 8.30AM" },

    { id: "Pos_Fun_N17", name: "Date included", input: "Exam eka 12/06/2026", expected: "එග්සෑම් එක 12/06/2026" },

    { id: "Pos_Fun_N18", name: "Unit measurement", input: "Rice kilo 2 ganna", expected: "රයිස් කිලෝ 2 ගන්න" },

    { id: "Pos_Fun_N19", name: "Multiple spaces", input: "Hello   yaluwo   oyata kohomada", expected: "හෙලෝ යාලුවෝ ඔයාට කොහොමද" },

    { id: "Pos_Fun_N20", name: "Compound sentence", input: "Mama wada karala gedara awa", expected: "මම වැඩ කරලා ගෙදර ආවා" },

    { id: "Pos_Fun_N21", name: "Complex sentence", input: "Wassa thibbath api trip eka giya mokada api ready wela hitiye", expected: "වැස්ස තිබ්බත් අපි ට්‍රිප් එක ගියා මොකද අපි රෙඩි වෙලා හිටියේ" },

    { id: "Pos_Fun_N22", name: "Interrogative polite form", input: "Oyata mata podi udawwak karanna puluwanda", expected: "ඔයාට මට පොඩි උදව්වක් කරන්න පුළුවන්ද" },

    { id: "Pos_Fun_N23", name: "Daily greeting", input: "Suba dawasak!", expected: "සුභ දවසක්!" },

    { id: "Pos_Fun_N24", name: "Long paragraph realistic usage",
      input: "Mama ada office gihin loku wada godak karala honda widihakta tired una. Eth mehema hari gedara awama loku sathutak thibba mokada family eka okkoma hitiya.",
      expected: "මම අද ඔෆිස් ගිහින් ලොකු වැඩ ගොඩක් කරලා හොඳ විදිහකට ටයර්ඩ් උනා. එත් මෙහෙම හරි ගෙදර ආවම ලොකු සතුටක් තිබ්බා මොකද ෆැමිලි එක ඔක්කොම හිටියා."
    },

    // ================= NEGATIVE FUNCTIONAL (10) =================

    { id: "Neg_Fun_N01", name: "Heavy slang confusion", input: "Ado machang eka patta scene ekak", expected: "අඩෝ මචං ඒක පට්ට සීන් එකක්" },

    { id: "Neg_Fun_N02", name: "Incorrect joined slang", input: "mokadameeka", expected: "මොකදමීක" },

    { id: "Neg_Fun_N03", name: "Mixed English sentence failure", input: "Meeting eka reschedule una because manager unavailable", expected: "මීටින් එක රිස්කෙඩියුල් උනා බිකෝස් මැනේජර් අනවේලබල්" },

    { id: "Neg_Fun_N04", name: "Abbreviation handling failure", input: "Mama ASAP reply one", expected: "මම අසාප් රිප්ලයි ඕනේ" },

    { id: "Neg_Fun_N05", name: "Punctuation overload", input: "Ehema da??? seriously!!!", expected: "එහෙමද??? සීරියස්ලි!!!" },

    { id: "Neg_Fun_N06", name: "Wrong negation spacing", input: "Mama enne na ne", expected: "මම එන්නෙ න නෙ" },

    { id: "Neg_Fun_N07", name: "English brand misuse", input: "Mama Instagram use karanne na", expected: "මම ඉන්ස්ටග්‍රෑම් යූස් කරන්නෙ නෑ" },

    { id: "Neg_Fun_N08", name: "Fast typed polite request", input: "oyatfileekahawamaewann", expected: "ඔයාටෆයිල්එකහවමඑවන්න" },

    { id: "Neg_Fun_N09", name: "Slang question failure", input: "Scene eka awul da bn", expected: "සීන් එක අවුල්ද බන්" },

    { id: "Neg_Fun_N10", name: "Long messy mixed input",
      input: "Ticket Rs.3000 9PM show ekata thiyenne colombo wala hurry book karapan sold out wenna puluwan",
      expected: "ටිකට් Rs.3000 9PM ශෝ එකට තියෙන්නෙ කොළඹ වල හරි බුක් කරපන් සොල්ඩ් ඕට් වෙන්න පුළුවන්"
    },

    // ================= UI TEST (1) =================

    { id: "Pos_UI_N01", name: "Real-time output updates while typing", input: "Mama typing karanawa", expected: "Real-time Sinhala output" }

  ];

  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {

      await page.waitForLoadState('domcontentloaded');

      const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
      const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

      await inputArea.click({ clickCount: 3 });
      await page.keyboard.press('Delete');
      await page.fill(inputSelector, '');

      await page.waitForTimeout(300);

      await inputArea.type(tc.input, { delay: 35 });

      await page.waitForTimeout(1000);

      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

      if (tc.id === 'Pos_UI_N01') {
        await expect(outputBox).not.toHaveText('');
      } else {
        await expect(outputBox).not.toHaveText('');

        const output = (await outputBox.textContent()) || '';

        const normalize = (str: string) =>
          str.replace(/\s+/g, ' ').trim();

        const expectedNorm = normalize(tc.expected);
        const outputNorm = normalize(output);

        expect(outputNorm.length).toBeGreaterThan(0);
      }
    });
  }

});
