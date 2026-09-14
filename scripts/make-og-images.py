# -*- coding: utf-8 -*-
"""OG images (1200x630) in the Nocturne palette.

Run on macOS: uses Hiragino for Japanese and Georgia for Latin, matching the
site's serif display face closely enough at this size. Output goes to public/,
where prerender-meta.mjs points at it.

  python3 scripts/make-og-images.py
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
GROUND = (0x0C, 0x12, 0x20)
CONTENT = (0xE8, 0xE4, 0xDB)
CONTENT_3 = (0x9A, 0xA3, 0xB2)
ACCENT = (0xE2, 0xAF, 0x6A)
LINE = (0x2A, 0x33, 0x45)

JP = "/System/Library/Fonts/ヒラギノ角ゴシック W6.ttc"
JP_LIGHT = "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc"
EN = "/System/Library/Fonts/Supplemental/Georgia.ttf"
EN_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"


def f(path, size):
    return ImageFont.truetype(path, size)


def tracked(draw, xy, text, font, fill, tracking=0):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking
    return x


def card(out, label, title, subtitle, title_font_path, title_size):
    img = Image.new("RGB", (W, H), GROUND)
    d = ImageDraw.Draw(img)

    # hairline frame, inset — the site's panel vocabulary
    d.rectangle([48, 48, W - 49, H - 49], outline=LINE, width=1)

    # monogram
    d.text((96, 96), "HK", font=f(EN_BOLD, 54), fill=CONTENT)
    hk_w = d.textlength("HK", font=f(EN_BOLD, 54))
    d.text((96 + hk_w + 2, 96), ".", font=f(EN_BOLD, 54), fill=ACCENT)

    # section label, letterspaced like .section-label
    tracked(d, (96, 188), label, f(JP, 20), ACCENT, tracking=3)

    # title
    d.text((96, 240), title, font=f(title_font_path, title_size), fill=CONTENT)

    # thin rule
    d.line([(96, 400), (W - 96, 400)], fill=LINE, width=1)

    # subtitle, wrapped by hand at a measured width
    words = subtitle.split(" ")
    lines, cur = [], ""
    sub_font = f(EN, 28)
    for w_ in words:
        trial = (cur + " " + w_).strip()
        if d.textlength(trial, font=sub_font) > W - 200:
            lines.append(cur)
            cur = w_
        else:
            cur = trial
    lines.append(cur)
    y = 436
    for ln in lines[:3]:
        d.text((96, y), ln, font=sub_font, fill=CONTENT_3)
        y += 40

    # footer
    d.text((96, H - 108), "katoh-office-site.pages.dev", font=f(EN, 22), fill=CONTENT_3)

    img.save(out, "PNG", optimize=True)
    print("wrote", out)


card(
    "public/og-advisory.png",
    "加藤裕幸事務所 ・ ADVISORY",
    "アドバイザリー",
    "Spine and spinal cord surgery, spinal cord stimulation, and how medical technology is adopted in Japan.",
    JP,
    88,
)

card(
    "public/og-default.png",
    "KATOH OFFICE",
    "加藤裕幸事務所",
    "Medical education, patient education platforms, and clinical advisory.",
    JP,
    88,
)
