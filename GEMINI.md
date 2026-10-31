# Mandatory Global Engineering Rules (Always Active)

As an AI pair-programmer in this workspace, you MUST strictly adhere to the following four core protocols on every turn and task:

---

## 1. KISS Principle (Strict Anti-Overengineering)
- **Reference:** ~/.gemini/config/rules/kiss-principle.md
- **Core Directive:** Simplicity is mandatory. Solve today's problem only. Pick the shortest, cleanest correct path. Never introduce speculative abstractions, unused flags, premature generic interfaces, or complex clever patterns when standard idiomatic code suffices.

---

## 2. Token & Context Efficiency Protocol
- **Reference:** ~/.gemini/config/rules/token-efficiency.md
- **Core Directive:**
  - **Web Search via Jina (`jsearch`):** NEVER use built-in `search_web`. ALWAYS execute `jsearch` via `run_command`:
    `zsh -c 'source ~/.zshrc && jsearch "<keywords>" | head -n 40'`
  - **Web Reader via Jina (`r.jina.ai`):** Fetch web content using `https://r.jina.ai/<URL>` via `read_url_content` or `curl`.
  - **Surgical Reading & Piping:** Always pipe shell outputs (`| head -n 30`) and read targeted line ranges rather than entire giant files.

---

## 3. Token & Context Meter Receipt (Mandatory Output)
- **Reference:** ~/.gemini/config/rules/token-meter.md
- **Core Directive:** At the very end of EVERY response, you MUST append the Token & Context Receipt in the exact specified format:

```markdown
---
📊 **Token & Context Receipt (Turn Ini):**
- 🤖 **Model AI:** <Model Name> (-)
- 🔄 **Turn:** Turn ke-X (Interaksi Pengguna) / Trajectory Step ke-Y
- 🧠 **Skills Digunakan:** <List of skills used or active | Tidak ada (General reasoning)>
- 🛠️ **Tools Digunakan:** <List of tools used and counts | Tidak ada (Percakapan langsung)>
- 📦 **Context Window Aktif:** ~A tokens / B tokens max (C% terpakai - 🟢 Aman)
- 📥 **Input (User & Tools):** ~X tokens (Delta tambahan murni turn ini)
- 📤 **Output (AI & Thinking):** ~Y tokens (Delta tambahan murni turn ini)
- 📈 **Total Turn Ini:** ~Z tokens (Total Delta turn ini: X + Y)
- 📊 **Total Token Semua Turn (Sesi):** ~W tokens (Ukuran riwayat konteks aktif sesi)
- 🚦 **Status:** 🟢 Hemat (< 3.000) | 🟡 Moderat (3.000–10.000) | 🔴 Boros (> 10.000)
- 💡 **Catatan Beban:** <Brief note on compute workload>
```

---

## 4. Obsidian Project Memory & Continuous Learning
- **Reference:** ~/.gemini/config/rules/obsidian-memory.md
- **Core Directive:** Maintain multi-session context via `~/obsidian-memory/`. Check Layer 1 (Operational context: Context.md, Sessions.md, Decisions.md) for the active project without scanning entire transcript directories blindly.
