/**
 * chatbot.js — Self-contained embeddable chat widget.
 *
 * HOW TO EMBED IN YOUR PORTFOLIO:
 *   Add these two lines anywhere in your HTML <head> or before </body>:
 *
 *     <link rel="stylesheet" href="chatbot.css" />
 *     <script src="chatbot.js"></script>
 *
 *   The widget creates itself automatically when the page loads.
 *   No framework, no build step — plain vanilla JS.
 *
 * ─────────────────────────────────────────────
 * WHAT TO BUILD (implement each section below)
 * ─────────────────────────────────────────────
 *
 * CONFIG
 *   One constant at the top so users can point it at their own backend:
 *     const API_URL = "http://localhost:8000/chat";
 *
 * HTML STRUCTURE TO CREATE WITH JS (document.createElement):
 *
 *   #chat-widget-container          ← the whole thing (fixed position, bottom-right)
 *     #chat-toggle-btn              ← floating button to open/close the chat window
 *     #chat-window                  ← the chat panel (hidden by default)
 *       #chat-header                ← title bar ("Ask My CV") + close button
 *       #chat-messages              ← scrollable area where messages appear
 *       #chat-input-area            ← row at the bottom
 *         <input type="text" />     ← where the user types
 *         <button>Send</button>     ← send button
 *
 * FUNCTIONS TO IMPLEMENT:
 *
 *   createWidget()
 *     Builds the entire DOM structure described above and appends it to document.body.
 *     Call this once at the bottom of the file (inside a DOMContentLoaded listener).
 *
 *   toggleChat()
 *     Shows or hides #chat-window by toggling a CSS class (e.g. "hidden").
 *     Called when the user clicks the toggle button or the close button.
 *
 *   appendMessage(role, text)
 *     Creates a <div class="chat-message {role}"> element with the text inside.
 *     role will be either "user" or "bot".
 *     Appends it to #chat-messages and scrolls to the bottom.
 *
 *   sendMessage()
 *     1. Reads the value from the input field (trim it, ignore if empty).
 *     2. Calls appendMessage("user", question).
 *     3. Clears the input field.
 *     4. Shows a loading indicator, e.g. appendMessage("bot", "Thinking...").
 *     5. Calls the backend:
 *
 *          fetch(API_URL, {
 *            method: "POST",
 *            headers: { "Content-Type": "application/json" },
 *            body: JSON.stringify({ question }),
 *          })
 *          .then(res => res.json())
 *          .then(data => {
 *            // remove the loading indicator
 *            // appendMessage("bot", data.answer)
 *          })
 *          .catch(() => appendMessage("bot", "Sorry, something went wrong."));
 *
 *   Allow the user to press Enter to send (listen to the "keydown" event on the input).
 *
 * ─────────────────────────────────────────────
 * TIPS
 * ─────────────────────────────────────────────
 *  - Use element.classList.toggle("hidden") to show/hide the window.
 *  - chatMessages.scrollTop = chatMessages.scrollHeight scrolls to the latest message.
 *  - Keep API_URL in one place so it's easy to change when deploying.
 */

// TODO: const API_URL = "http://localhost:8000/chat";

// TODO: function createWidget() { ... }

// TODO: function toggleChat() { ... }

// TODO: function appendMessage(role, text) { ... }

// TODO: function sendMessage() { ... }

// TODO: wire everything up inside a DOMContentLoaded listener:
// document.addEventListener("DOMContentLoaded", () => {
//   createWidget();
// });
