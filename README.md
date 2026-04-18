# thought breaker

A tiny CLI tool that interrupts rumination loops with a random grounding prompt.

When your brain won't stop — run `tb`.

---

## install

Requires [Node.js](https://nodejs.org) (v14 or higher).

**Step 1 — clone the repo**

```bash
git clone https://github.com/garykatiya/thoughtbreaker
cd thoughtbreaker
```

**Step 2 — install globally**

```bash
npm install -g .
```

**Step 3 — run it**

```bash
tb
```

If you get a permissions error on Windows, open PowerShell as Administrator and run:

```powershell
Set-ExecutionPolicy RemoteSigned
```

Then try `tb` again.

---

## usage

```bash
tb                   # random prompt (any category)
tb --sensory         # ground through your senses
tb --random          # total pattern interrupt
tb --cognitive       # redirect with a mental task
tb --timer 25        # auto-prompt every 25 minutes
tb --help            # show all commands
```

---

## why

Rumination — replaying worries, scenarios, or thoughts on a loop — is one of the most common causes of anxiety and lost focus. The fastest way out isn't suppression, it's interruption.
