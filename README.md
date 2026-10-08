# Panarea korporativ saytı

Bu, Panarea-nın Azərbaycan, ingilis və rus dillərində təqdim olunan korporativ imic saytıdır. Saytda istehsal imkanları, ixrac xəritəsi və layihə qalereyaları var. Onlayn satış funksiyası yoxdur.

## Pulsuz hostinq: GitHub Pages

Sayt statik HTML, CSS, JavaScript və `assets` qovluğundakı şəkillərdən ibarətdir. Server tərəfli proqram və verilənlər bazası tələb etmir. `CNAME` faylı xüsusi domeni `panarea.az` olaraq təyin edir.

1. Faylları GitHub-da ictimai repozitoriyaya yükləyin. GitHub Pages ictimai repozitoriyalarda pulsuzdur.
2. Repozitoriyada **Settings → Pages** bölməsindən `main` budağını və `/ (root)` qovluğunu yayımlama mənbəyi kimi seçin.
3. Pages parametrlərində xüsusi domen olaraq `panarea.az` yazın və domen təsdiqləndikdən sonra HTTPS-i aktiv edin.
4. Hostimul DNS panelində `@` üçün GitHub Pages-in dörd `A` qeydi, `www` üçün GitHub Pages host adına `CNAME` qeydi yaradın. Qeydlərin cari ünvanlarını GitHub-un təlimatından götürün.
5. Hostimul-da olan `MX`, `TXT` və e-poçtla bağlı digər DNS qeydlərini saxlayın ki, `@panarea.az` poçt qutuları işləməyə davam etsin.

GitHub Pages üçün repozitoriya ictimai görünür; sayt kodu və şəkilləri də ictimai olacaq. Domenin qeydiyyatı Hostimul-da qalır, yalnız veb-sayt üçün DNS qeydləri yenilənir.

## Yerli baxış

`index.html` faylını brauzerdə açmaq kifayətdir. Dil seçimi, layihə qalereyaları və ana səhifənin şəkil slaydları JavaScript ilə işləyir.
