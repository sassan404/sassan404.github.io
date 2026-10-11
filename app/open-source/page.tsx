"use client";

import { useState } from "react";

type Tier = "S" | "A" | "B" | "C" | "D" | "E" | "F";

const TIERS = [
  { tier: "S", label: "Fantastic", meaning: "absolutely loved it" },
  { tier: "A", label: "Great", meaning: "highly recommended" },
  { tier: "B", label: "Good", meaning: "worth using" },
  { tier: "C", label: "Neutral / Unranked", meaning: "no verdict yet" },
  { tier: "D", label: "Meh", meaning: "noticeable flaws" },
  { tier: "E", label: "Poor", meaning: "mostly disappointing" },
  { tier: "F", label: "Bad", meaning: "avoid" },
] satisfies readonly { tier: Tier; label: string; meaning: string }[];

type Category = "photos" | "os" | "browsers" | "email" | "storage" | "notes" | "ide";

const CATEGORIES = [
  { slug: "photos", label: "Photos" },
  { slug: "os", label: "OS" },
  { slug: "browsers", label: "Browsers" },
  { slug: "email", label: "Email" },
  { slug: "storage", label: "Storage" },
  { slug: "notes", label: "Notes" },
  { slug: "ide", label: "IDEs" },
] as const satisfies readonly { slug: Category; label: string }[];

type Item = {
  name: string;
  category: Category;
  tier: Tier;
  notes?: string[];
  proprietary?: boolean;
};

const items = [
  {
    name: "Google Photos",
    category: "photos",
    tier: "F",
    proprietary: true,
    notes: ["Powered by Google"],
  },
  { name: "Immich", category: "photos", tier: "C" },
  { name: "PhotoPrism", category: "photos", tier: "C" },
  { name: "Nextcloud Photos", category: "photos", tier: "C" },
  { name: "Piwigo", category: "photos", tier: "C" },

  {
    name: "Windows",
    category: "os",
    tier: "F",
    proprietary: true,
    notes: [
      "Made by Microsoft",
      "Has a lot of things running in the background",
      "Forces the use of an online account",
      "Forces the use of AI",
    ],
  },
  {
    name: "Linux Mint",
    category: "os",
    tier: "S",
    notes: [
      "Very simple",
      "Does not have the aesthetics that other OS have, can seem boring for some people",
    ],
  },
  {
    name: "Zorin OS",
    category: "os",
    tier: "B",
    notes: [
      "Worked well for gaming",
      "Seems to be slow at reading disks and can be slow in general",
      "Animations seem to be a bit laggy",
    ],
  },
  {
    name: "openSUSE Leap",
    category: "os",
    tier: "B",
    notes: [
      "Feels techy and fits to use as my work OS",
      "Not very robust",
      "My bluetooth headset often disconnects on its own",
    ],
  },
  { name: "Bazzite", category: "os", tier: "D", notes: ["Could not install"] },
  {
    name: "Pop!_OS",
    category: "os",
    tier: "D",
    notes: [
      "Had an issue with moving the camera while playing Sins of a Solar Empire",
      "Animation felt laggy",
      "Pop-ups did not work well",
    ],
  },
  {
    name: "Arch Linux",
    category: "os",
    tier: "D",
    notes: ["Flagged as an OS for experts"],
  },
  { name: "CachyOS", category: "os", tier: "C" },

  { name: "Chrome", category: "browsers", tier: "F", proprietary: true },
  { name: "Brave", category: "browsers", tier: "A" },
  {
    name: "Firefox",
    category: "browsers",
    tier: "E",
    notes: ["Firefox based", "Felt worse than the Chromium based ones"],
  },
  {
    name: "Zen Browser",
    category: "browsers",
    tier: "B",
    notes: ["Firefox based"],
  },
  {
    name: "Arc",
    category: "browsers",
    tier: "C",
    notes: ["Chrome based", "Never really settled into it"],
  },
  {
    name: "LibreWolf",
    category: "browsers",
    tier: "C",
    notes: ["Firefox based", "Open source, good for privacy"],
  },
  {
    name: "Helium",
    category: "browsers",
    tier: "C",
    notes: [
      "Chrome based",
      "Chrome but more private and blocks ads",
      "Uses more RAM than Firefox based browsers",
    ],
  },

  {
    name: "Gmail",
    category: "email",
    tier: "D",
    proprietary: true,
    notes: ["From Google", "Something else"],
  },
  {
    name: "Outlook",
    category: "email",
    tier: "D",
    proprietary: true,
    notes: ["From Microsoft"],
  },
  { name: "Proton Mail", category: "email", tier: "C" },
  { name: "Mailbox.org", category: "email", tier: "C" },
  { name: "Tuta", category: "email", tier: "C" },
  { name: "Nextcloud Mail", category: "email", tier: "C" },

  {
    name: "Google Drive",
    category: "storage",
    tier: "F",
    proprietary: true,
    notes: ["Renting my files from Google"],
  },
  { name: "Proton Drive", category: "storage", tier: "C" },
  { name: "Dropbox", category: "storage", tier: "C" },
  { name: "Nextcloud", category: "storage", tier: "C" },

  { name: "Notion", category: "notes", tier: "C", proprietary: true },
  { name: "Google Keep", category: "notes", tier: "C" },
  { name: "Google Docs", category: "notes", tier: "C" },
  { name: "Obsidian", category: "notes", tier: "C" },
  { name: "Logseq", category: "notes", tier: "C" },
  { name: "AppFlow", category: "notes", tier: "C" },

  {
    name: "IntelliJ IDEA",
    category: "ide",
    tier: "C",
    proprietary: true,
    notes: ["The one it replaces"],
  },
  { name: "VS Code", category: "ide", tier: "C" },
  { name: "VSMATE", category: "ide", tier: "C" },
  { name: "Sublime Text", category: "ide", tier: "C" },
  { name: "Neovim", category: "ide", tier: "C" },
  { name: "Zed", category: "ide", tier: "C" },
] satisfies readonly Item[];

const ALL = "all" as const;

const categoryLabel = new Map(CATEGORIES.map((row) => [row.slug, row.label]));

export default function OpenSource() {
  const [category, setCategory] = useState<typeof ALL | Category>(ALL);

  const visible = items.filter(
    (item) => category === ALL || item.category === category,
  );

  return (
    <section
      className="panel anchor-section"
      id="open-source"
      aria-labelledby="open-source-title"
    >
      <h2 className="section-title" id="open-source-title">
        Apps &amp; Services
      </h2>
      <p className="section-copy">
        Every app and service I actually use, ranked honestly. Hover or focus a
        pill to see why it landed in that tier. C means no verdict yet, not a bad
        score.
      </p>

      <div className="rank-filters" role="group" aria-label="Filter by type">
        <button
          type="button"
          className="chip"
          aria-pressed={category === ALL}
          onClick={() => setCategory(ALL)}
        >
          All
        </button>
        {CATEGORIES.map((row) => (
          <button
            key={row.slug}
            type="button"
            className="chip"
            aria-pressed={category === row.slug}
            onClick={() => setCategory(row.slug)}
          >
            {row.label}
          </button>
        ))}
      </div>

      <ul className="tier-rows">
        {TIERS.map((row) => {
          const inTier = visible.filter((item) => item.tier === row.tier);

          return (
            <li key={row.tier} className="tier-row">
              <span className="tier-label" data-tier={row.tier}>
                <span className="tier-letter">{row.tier}</span>
                <span className="tier-name">
                  {row.label} · {row.meaning}
                </span>
              </span>

              <ul className="pill-list">
                {inTier.map((item) => {
                  const tipId = `rank-tip-${item.name.replace(/\W+/g, "-")}`;

                  return (
                    <li key={item.name} className="rank-cell">
                      <span
                        className="pill rank-pill"
                        data-tier={item.tier}
                        tabIndex={0}
                        aria-describedby={tipId}
                      >
                        {item.name}
                      </span>
                      <span className="rank-tip" id={tipId} role="tooltip">
                        <strong>
                          {item.tier} · {row.label}
                        </strong>{" "}
                        · {categoryLabel.get(item.category)}
                        {item.proprietary ? " · proprietary" : ""}
                        {item.notes?.length ? (
                          <em> — {item.notes.join("\n")}</em>
                        ) : null}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>

      <ul className="item-list">
        <li>
          <div className="item-heading">
            <h3>GitHub Contributions</h3>
            <span className="item-meta">Public Collaboration</span>
          </div>
          <p className="item-copy">
            Contributions and repositories that reflect curiosity, problem
            solving, and a willingness to improve tools in the open.
          </p>
        </li>
      </ul>
    </section>
  );
}