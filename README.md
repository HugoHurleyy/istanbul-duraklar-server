# `GET` all lines

[Click to see live example](https://istanbul-duraklar.onrender.com/api/v1/lines)


Example Response:
```json
"status": "success",
"result": 24,
"ok": true,
"data": {
    "lines": [
        {
            "_id": "640c7a4cc1cfe77009ceae65",
            "name": "Yenikapı-Atatürk Havalimanı Metro Hattı",
            "lineCode": "M1A",
            "type": "metro",
            "stops": [
                {
                    "name": "Atatürk Havalimanı",
                    "transfers": null
                },
                {
                    "name": "DTM-İstanbul Fuar Merkezi",
                    "transfers": null
                },
                {
                    "name": "Yenibosna",
                    "transfers": null
                },
                {
                    "name": "Ataköy Şirinevler",
                    "transfers": [
                        {
                            "name": "Metrobüs Hattı",
                            "lineCode": "bus-rapid"
                        }
                    ]
                },
                {
                    "name": "Bahçelievler",
                    "transfers": [
                        {
                            "name": "Metrobüs Hattı",
                            "lineCode": "bus-rapid"
                        }
                    ]
                },
                {
                    "name": "Bakırköy İncirli",
                    "transfers": null
                },
                {
                    "name": "Zeytinburnu",
                    "transfers": [
                        {
                            "name": "Kabataş-Bağcılar Tramvay Hattı",
                            "lineCode": "T1"
                        },
                        {
                            "name": "Metrobüs Hattı",
                            "lineCode": "bus-rapid"
                        }
                    ]
                },
                {
                    "name": "Merter",
                    "transfers": [
                        {
                            "name": "Metrobüs Hattı",
                            "lineCode": "bus-rapid"
                        }
                    ]
                },
                {
                    "name": "Davutpaşa YTÜ",
                    "transfers": null
                },
                {
                    "name": "Terazidere",
                    "transfers": null
                },
                {
                    "name": "Otogar",
                    "transfers": [
                        {
                            "name": "Yenikapı-Kirazlı Metro Hattı",
                            "lineCode": "M1B"
                        }
                    ]
                },
                {
                    "name": "Kocatepe",
                    "transfers": null
                },
                {
                    "name": "Sağmalcılar",
                    "transfers": null
                },
                {
                    "name": "Bayrampaşa Maltepe",
                    "transfers": null
                },
                {
                    "name": "Topkapı-Ulubatlı",
                    "transfers": [
                        {
                            "name": "Topkapı-Mescid-i Selam Tramvay Hattı",
                            "lineCode": "T4"
                        }
                    ]
                },
                {
                    "name": "Emniyet-Fatih",
                    "transfers": null
                },
                {
                    "name": "Aksaray",
                    "transfers": null
                },
                {
                    "name": "Yenikapı",
                    "transfers": [
                        {
                            "name": "Yenikapı-Kirazlı Metro Hattı",
                            "lineCode": "M1B"
                        },
                        {
                            "name": "Yenikapı-Seyrantepe-Hacıosman Metro Hattı",
                            "lineCode": "M2"
                        }
                    ]
                }
            ],
            "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/3/35/Istanbul_Line_Symbol_M1A.png",
            "stopCount": 18,
            "createdAt": "2023-03-11T12:55:40.653Z",
            "updatedAt": "2023-03-11T12:55:40.653Z",
            "searchQuery": "yenikapi-ataturk-havalimani-metro-hatti-m1a"
        },
```



