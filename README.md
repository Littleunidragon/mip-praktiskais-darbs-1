# Praktiskais darbs 1 (K33)
Mūsu komandas uzdevums bija izveidot spēli ar grafisko saskarni. Šajā dokumentā Jūs varēsiet atrast visas detaļas un tehniskās nianses par šo projektu, kā to konfigurēt un palaist lokāli.

***Šī projekta izstrādē MI rīki VISPĀR netika pielietoti, ar galveno domu, lai labāk izprastu kas ir uzrakstīts un patiesi saprast koda būtību. Neskaidrību gadījumā versos JS dokumentācijās vai StackOverflow resursos (https://www.w3schools.com/js/ , https://developer.mozilla.org/en-US/docs/Web/JavaScript)***

## Spēles sākuma nosacījumi
![Sākuma nosacījumi](assets/sakuma-nosacijumi.png)
*Sākuma nosacījumi no komandai piešķirtā faila*

## Spēles apraksts
![Spēles apraksts](assets/speles-apraksts.png)
*Spēles apraksts no komandai piešķirtā faila*

## Tehniskais apraksts
Šeit būs aprakstītas izmantotās tehnoloģijas lai panāktu uzdevuma mērķi:
- **HTML** (tika izmantots lai izveidotu grafiskās saskarnes pamatus);
- **CSS** ar ārēju **TailwindCSS** importu (tika izmantots lai vizuāli padarītu grafisko saskarni tīkamāku)
- **JavaScript** (tika izmantotas JS klases lai izveidotu koku struktūru un padarītu spēli dinamisku)

## Nepieciešamā papildus funkcionalitāte
Veidojot šo darbu, nonācām strupceļā. Netika atrunāts stāvoklis, kur skaitli kas ir lielāks par 10, nevar izdalīt ar 2 vai 3. Tas liek spēlei apstāties pirms tiek sasniegts definētais beigu stāvoklis (skaitlis <= 10).

**Tādēļ nepieciešams izveidot papildus nosacījumu:** ja skaitli nevar izdalīt ar 2 vai 3 lai sanāktu vesels skaitlis, tad spēle ir jābeidz, un jāpārbauda punktu skaits tā pat kā pie sākotnējiem nosacījumiem.

## Konfigurācija
Visa iespējamā konfigurācija pieejama `config.js` failā.

**Konfigurācijas failā sastopamie mainīgie un to nozīme:**
- **range**: pirmais masīva elements norādas minimālo un otrais masīva elements norāda maksimālo pēc nejaušības izvēlēto skaitļu robežu.

## Lokālās palaišanas soļi
Seko šiem punktiem, lai lokāli palaistu šo projektu:
1. Noklonē šo projektu no GitHub ar: `git clone https://github.com/kantans/mip-praktiskais-darbs-1.git`;
2. Atver šo noklonēto projektu savā izvēlētajā IDE (PHPStorm, VSCode u.c.);
3. Izmantojot PHPStorm/WEBStorm spiežot labo klikšķi uz index.html nospied `Open in > Browser > Chrome` vai jebkuru citu sev tīkamo pārlūku (līdzīgi soļi ir arī VSCode un citos IDE);