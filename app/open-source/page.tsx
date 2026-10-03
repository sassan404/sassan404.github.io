type Option = {
  name: string;
  proprietary?: boolean;
  score?: number;
  pros?: string[];
  cons?: string[];
  extra?: string;
};

const groups: { category: string; options: Option[] }[] = [
  {
    category: "Photos",
    options: [
      {
        name: "Google Photos",
        proprietary: true,
        score: -10,
        cons: ["Powered by Google"],
      },
      { name: "Immich" },
      { name: "PhotoPrism" },
      { name: "Nextcloud Photos" },
      { name: "Piwigo" },
    ],
  },
  {
    category: "OS",
    options: [
      {
        name: "Windows",
        proprietary: true,
        score: -10,
        cons: [
          "Made by Microsoft",
          "Has a lot of things running in the background",
          "Forces the use of an online account",
          "Forces the use of AI",
        ],
      },
      {
        name: "Linux Mint",
        score: 6,
        pros: ["Very simple"],
        cons: [
          "Does not have the aesthetics that other OS have, can seem boring for some people",
        ],
      },
      {
        name: "Zorin OS",
        score: 5,
        pros: ["Worked well for gaming"],
        cons: [
          "Seems to be slow at reading disks and can be slow in general",
          "Animations seem to be a bit laggy",
        ],
      },
      {
        name: "openSUSE Leap",
        score: 4,
        pros: [
          "Feels techy and fits to use as my work OS",
        ],
        cons: [
          "Not very robust",
          "My bluetooth headset often disconnects on its own",
        ],
      },
      {
        name: "Bazzite",
        score: -2,
        cons: ["Could not install"],
      },
      {
        name: "Pop!_OS",
        score: -2,
        cons: [
          "Had an issue with moving the camera while playing Sins of a Solar Empire",
          "Animation felt laggy",
          "Pop-ups did not work well",
        ],
      },
      {
        name: "Arch Linux",
        score: -1,
        cons: ["Flagged as an OS for experts"],
      },
      { name: "CachyOS" },
    ],
  },
  {
    category: "Browsers",
    options: [
      { name: "Chrome", proprietary: true, score: -10 },
      { name: "Brave", score: 4 },
      { name: "Firefox", score: -5 },
      { name: "Zen Browser", score: 3, extra: "Firefox based" },
      { name: "Arc", score: 1 },
      {
        name: "LibreWolf",
        pros: ["Open source", "Good for privacy"],
        extra: "Firefox based",
      },
      {
        name: "Helium",
        pros: ["Chrome but more private and blocks ads"],
        cons: ["Uses more RAM than Firefox based browsers"],
        extra: "Chrome based",
      },
    ],
  },
  {
    category: "Email",
    options: [
      {
        name: "Gmail",
        proprietary: true,
        score: -2,
        cons: ["From Google", "Something else"],
      },
      { name: "Outlook", score: -1, cons: ["From Microsoft"] },
      { name: "Proton Mail" },
      { name: "Mailbox.org" },
      { name: "Tuta" },
      { name: "Nextcloud Mail" },
    ],
  },
  {
    category: "Storage",
    options: [
      { name: "Google Drive", proprietary: true },
      { name: "Proton Drive" },
      { name: "Dropbox" },
      { name: "Nextcloud" },
    ],
  },
  {
    category: "Notes",
    options: [
      { name: "Notion", proprietary: true },
      { name: "Google Keep" },
      { name: "Google Docs" },
      { name: "Obsidian" },
      { name: "Logseq" },
      { name: "AppFlow" },
    ],
  },
  {
    category: "IDEs",
    options: [
      { name: "IntelliJ IDEA", proprietary: true },
      { name: "VS Code" },
      { name: "VSMATE" },
      { name: "Sublime Text" },
      { name: "Neovim" },
      { name: "Zed" },
    ],
  },
];

// ponytail: linear red -> green ramp on a 0 hue at -10 to 120 hue at +10.
// Swap for a real colour scale once more than a handful of options are scored.
const scoreColor = (score: number) =>
  `hsl(${((score + 10) / 20) * 120} 65% 42%)`;

export default function OpenSource() {
  return (
    <section
      className="panel anchor-section"
      id="open-source"
      aria-labelledby="open-source-title"
    >
      <h2 className="section-title" id="open-source-title">
        Open Source
      </h2>
      <p className="section-copy">
        Open source is where experimentation, shared learning, and community
        contribution come together. These are the tools I reach for when I want
        to own my data instead of renting it, scored from -10 to +10 against the
        proprietary tool in each row.
      </p>

      <ul className="item-list">
        {groups.map((group) => (
          <li key={group.category}>
            <div className="item-heading">
              <h3>{group.category}</h3>
              <span className="item-meta">
                instead of{" "}
                {group.options.find((option) => option.proprietary)?.name}
              </span>
            </div>

            <ul className="item-list">
              {group.options.map((option) => (
                <li key={option.name}>
                  <div className="item-heading">
                    <h4>
                      {option.name}
                      {option.proprietary ? " (proprietary)" : null}
                    </h4>
                    {option.score !== undefined ? (
                      <span
                        className="score-badge"
                        style={{ background: scoreColor(option.score) }}
                      >
                        {option.score > 0 ? `+${option.score}` : option.score}
                      </span>
                    ) : null}
                  </div>

                  {option.extra ? (
                    <p className="option-note">{option.extra}</p>
                  ) : null}

                  {option.pros?.length || option.cons?.length ? (
                    <div className="option-notes">
                      {option.pros?.length ? (
                        <ul className="note-list note-pros">
                          {option.pros.map((pro) => (
                            <li key={pro}>{pro}</li>
                          ))}
                        </ul>
                      ) : null}
                      {option.cons?.length ? (
                        <ul className="note-list note-cons">
                          {option.cons.map((con) => (
                            <li key={con}>{con}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p className="section-copy">
        No badge means not scored yet, not a bad score.
      </p>

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
