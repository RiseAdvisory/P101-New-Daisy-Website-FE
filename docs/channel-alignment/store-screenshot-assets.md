# Store screenshot assets in Figma

Source of truth for App Store and Play Store screenshots. Recorded 2026-08-01.

**File:** Social Assets - The Daisy
**File key:** `UbNCcvCRAzuWJnDTJ3ajJ8`
**Base URL:** `https://www.figma.com/design/UbNCcvCRAzuWJnDTJ3ajJ8/Social-Assets---The-Daisy?node-id=`

All sets tell the same five-panel story, in this order:

1. Daisy logo over the Schedule calendar (no caption)
2. Simplified Client Communication
3. Your Branded Booking Website
4. Powerful Reports & Analytics
5. Many More Features

The iPad sets caption panel 1 "Your Perfect Concierge Booking Service" instead of leaving it uncaptioned.

---

## App Store (iPhone)

Section `90-7204` · [open](https://www.figma.com/design/UbNCcvCRAzuWJnDTJ3ajJ8/Social-Assets---The-Daisy?node-id=90-7204)

| Label | Size | Frame node IDs (panels 1 to 5) |
|-------|------|-------------------------------|
| 6.57 inch | 1290 x 2796 | `90:7914`, `147:10208`, `90:7963`, `90:7987`, `90:8011` |
| 6.5 inch | 1242 x 2688 | `90:7209`, `90:7229`, `147:10367`, `90:7278`, `90:7302` |
| 5.5 inch | 1242 x 2208 | `90:7328`, `90:7442`, `147:10428`, `90:7678`, `90:7796` |

The 6.5 inch set matches the `APP_IPHONE_65` display type the listing currently uses.

## App Store / iPad

| Orientation | Size | Section | Frame node IDs |
|-------------|------|---------|----------------|
| Portrait | 2048 x 2732 | `77-5277` · [open](https://www.figma.com/design/UbNCcvCRAzuWJnDTJ3ajJ8/Social-Assets---The-Daisy?node-id=77-5277) | `77:5279`, `77:5576`, `77:5660`, `129:16180`, `77:5910` |
| Landscape | 2732 x 2048 | `129-17037` · [open](https://www.figma.com/design/UbNCcvCRAzuWJnDTJ3ajJ8/Social-Assets---The-Daisy?node-id=129-17037) | `129:20703`, `129:21457`, `129:22202`, `129:22947`, `129:23692` |

Both satisfy `APP_IPAD_PRO_3GEN_129`, which the listing currently uses. Pick one orientation per upload; do not mix.

## Play Store

| Label | Size | Section | Frame node IDs |
|-------|------|---------|----------------|
| 16:9, Android device frames | 1242 x 2208 | `90-6903` · [open](https://www.figma.com/design/UbNCcvCRAzuWJnDTJ3ajJ8/Social-Assets---The-Daisy?node-id=90-6903) | `90:6906`, `90:6950`, `147:10547`, `90:7048`, `90:7096` |
| iPhone device frames | 1284 x 2778 | `90-6539` · [open](https://www.figma.com/design/UbNCcvCRAzuWJnDTJ3ajJ8/Social-Assets---The-Daisy?node-id=90-6539) | see section; five frames in reading order |

Prefer the 16:9 Android-framed set for `phoneScreenshots`: it shows a Samsung device, which reads correctly on a Play listing. The 1284 x 2778 set uses iPhone frames.

---

## How to export

`download_assets` with the file key and a frame node ID returns a PNG of that
frame. Export each of the five frames individually; exporting the section node
returns one wide image of the whole board, which is not what the stores want.

Both stores want PNG or JPEG with no alpha channel. Figma exports PNG with
alpha, so flatten onto an opaque background before upload or Apple rejects the
asset.

## Where these land

| Store | Field | Display type |
|-------|-------|--------------|
| App Store | screenshot set on an editable version localization | `APP_IPHONE_65`, `APP_IPAD_PRO_3GEN_129` |
| Play Store | `phoneScreenshots`, `sevenInchScreenshots`, `tenInchScreenshots` per listing locale | n/a |

iOS screenshots can only be changed on a version in an editable state. Play
screenshots can be changed at any time.

---

## Upload log

**2026-08-01** — replaced 4 old screenshots with the current 5-panel set on both stores.

What was wrong before: panel 3 showed the old Templates admin screen rather
than the live booking site, and "Powerful Reports & Analytics" was missing
entirely, so both listings carried four panels instead of five. Panels 1, 2
and 5 were already current but were re-uploaded anyway so every panel comes
from the same design revision.

| Store | Surface | Source set | Result |
|-------|---------|-----------|--------|
| Play | `phoneScreenshots` | 16:9 Android, 1242 x 2208 | 5 images, committed to review |
| Play | `sevenInchScreenshots` | iPad portrait, 2048 x 2732 | 5 images |
| Play | `tenInchScreenshots` | iPad portrait, 2048 x 2732 | 5 images |
| App Store | `APP_IPHONE_65` on 1.5.4 | 6.5 inch, 1242 x 2688 | 5 shots, delivery COMPLETE |
| App Store | `APP_IPAD_PRO_3GEN_129` on 1.5.4 | iPad portrait, 2048 x 2732 | 5 shots, delivery COMPLETE |

The iOS screenshots sit on the 1.5.4 draft and go live with that release. The
existing sets were deleted and recreated rather than edited in place, which
keeps panel order clean.

Figma exports PNG with an alpha channel and Apple rejects that, so each file
was flattened onto the brand background (`#2e4342`) and the alpha removed
before upload.

**Arabic is still without screenshots on both stores** (App Store `ar-SA` has
no set; Play `ar` falls back to the English listing). The Figma panels are
captioned in English, so uploading them under Arabic would show English text
to Arabic users. Commission Arabic-captioned panels before filling this in.
