Make the address field optional in the order/checkout form on the menu page.

Changes in `src/routes/menu.tsx`:
- Remove `!address` from the checkout button `disabled` condition (line 457), so the user can place an order with name and phone only.
- Update the WhatsApp message composition in `sendOrder` (around line 220-222) so the address line is only included if the user actually entered an address. If the address is empty, the message will omit that line entirely rather than sending a blank value.

This is a minimal, safe change affecting only frontend presentation and validation logic. No backend or database changes are needed.