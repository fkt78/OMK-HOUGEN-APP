<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>日本全国！方言励ましボタン</title>
    <!-- Google Fonts: Zen Maru Gothic -->
    <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-yellow: #FFD93D;
            --accent-orange: #FF8400;
            --soft-white: #FFF9DE;
            --text-dark: #4F200D;
            --current-theme-color: #FFD93D;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Zen Maru Gothic', sans-serif;
            background-color: var(--current-theme-color);
            color: var(--text-dark);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            overflow-x: hidden;
            transition: background-color 0.5s ease;
        }

        .container {
            background-color: var(--soft-white);
            width: 90%;
            max-width: 500px;
            padding: 2rem 1rem;
            border-radius: 40px;
            box-shadow: 0 15px 0px rgba(79, 32, 13, 0.1);
            text-align: center;
            border: 6px solid var(--text-dark);
            position: relative;
            z-index: 10;
        }

        .mode-selector {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            margin-bottom: 1.5rem;
        }

        .mode-btn {
            background: white;
            border: 2px solid var(--text-dark);
            border-radius: 12px;
            padding: 8px 2px;
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s;
        }

        .mode-btn.active {
            background-color: var(--accent-orange);
            color: white;
            transform: scale(1.05);
            box-shadow: 0 4px 0 var(--text-dark);
        }

        .header-icon {
            font-size: 3.5rem;
            margin-bottom: 0.5rem;
            display: inline-block;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .header-icon.bounce {
            animation: bounce 0.5s;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.1); }
        }

        h1 {
            font-weight: 900;
            font-size: 1.4rem;
            margin: 0 0 1.2rem 0;
        }

        .display-area {
            min-height: 160px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 25px;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border: 5px solid var(--current-theme-color);
            position: relative;
            transition: border-color 0.5s ease;
        }

        .display-area::after {
            content: '';
            position: absolute;
            bottom: -22px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 18px solid transparent;
            border-right: 18px solid transparent;
            border-top: 22px solid var(--current-theme-color);
            transition: border-top-color 0.5s ease;
        }

        #message {
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 1.6;
            transition: opacity 0.2s, transform 0.2s;
        }

        .btn-push {
            background-color: var(--accent-orange);
            color: white;
            border: 4px solid var(--text-dark);
            padding: 1.2rem;
            font-size: 1.6rem;
            font-weight: 900;
            border-radius: 60px;
            cursor: pointer;
            box-shadow: 0 8px 0px var(--text-dark);
            transition: all 0.1s;
            width: 85%;
            touch-action: manipulation;
        }

        .btn-push:active {
            box-shadow: 0 2px 0px var(--text-dark);
            transform: translateY(6px);
        }

        .fade-out {
            opacity: 0;
            transform: scale(0.95);
        }

        .footer {
            margin-top: 1.5rem;
            font-size: 0.85rem;
            font-weight: 700;
            opacity: 0.8;
        }
<<<<<<< HEAD

        .category-selector {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            justify-content: center;
            margin-bottom: 1rem;
        }

        .category-btn {
            background: white;
            border: 2px solid var(--text-dark);
            border-radius: 20px;
            padding: 6px 12px;
            font-size: 0.75rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s;
        }

        .category-btn.active {
            background-color: var(--current-theme-color);
            color: var(--text-dark);
            transform: scale(1.05);
        }

        .action-buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 1rem;
            flex-wrap: wrap;
        }

        .btn-action {
            background-color: white;
            color: var(--text-dark);
            border: 3px solid var(--text-dark);
            padding: 0.8rem 1.2rem;
            font-size: 1rem;
            font-weight: 700;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0 4px 0px var(--text-dark);
            transition: all 0.1s;
            display: flex;
            align-items: center;
            gap: 6px;
            touch-action: manipulation;
        }

        .btn-action:active {
            box-shadow: 0 1px 0px var(--text-dark);
            transform: translateY(3px);
        }

        .btn-action:hover {
            background-color: var(--current-theme-color);
        }

        .btn-action.speaking {
            background-color: var(--accent-orange);
            color: white;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .btn-action:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        /* パーティクルエフェクト用 */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        }

        .particle {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            pointer-events: none;
            animation: particle-fall 2s ease-out forwards;
        }

        @keyframes particle-fall {
            0% {
                opacity: 1;
                transform: translateY(0) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: translateY(100vh) rotate(360deg);
            }
        }

        /* 画面シェイク */
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px) rotate(-2deg); }
            20%, 40%, 60%, 80% { transform: translateX(10px) rotate(2deg); }
        }

        .shake {
            animation: shake 0.5s;
        }

        /* メッセージ強調アニメーション */
        @keyframes message-pop {
            0% {
                transform: scale(0.8);
                opacity: 0;
            }
            50% {
                transform: scale(1.15);
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        .message-pop {
            animation: message-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes rainbow {
            0% { color: #FF0000; }
            16% { color: #FF7F00; }
            33% { color: #FFFF00; }
            50% { color: #00FF00; }
            66% { color: #0000FF; }
            83% { color: #4B0082; }
            100% { color: #9400D3; }
        }

        .rainbow-text {
            animation: rainbow 2s linear infinite;
        }

        /* 連続タップカウンター */
        .combo-counter {
            position: fixed;
            top: 20px;
            right: 20px;
            font-size: 2rem;
            font-weight: 900;
            color: var(--accent-orange);
            z-index: 10000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .combo-counter.show {
            opacity: 1;
        }

        .combo-counter.combo {
            animation: combo-pop 0.5s;
        }

        @keyframes combo-pop {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.5); }
        }

        /* エフェクト強化 */
        .btn-push:active {
            box-shadow: 0 2px 0px var(--text-dark);
            transform: translateY(6px) scale(0.95);
        }

        .btn-push.impact {
            animation: impact-pulse 0.3s;
        }

        @keyframes impact-pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); box-shadow: 0 0 30px var(--accent-orange); }
            100% { transform: scale(1); }
        }
    </style>
</head>
<body>
    <div class="particles" id="particles"></div>
    <div class="combo-counter" id="comboCounter"></div>
=======
    </style>
</head>
<body>
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff

    <div class="container">
        <div class="mode-selector">
            <button class="mode-btn active" onclick="setMode('iga')">伊賀弁</button>
            <button class="mode-btn" onclick="setMode('okinawa')">沖縄弁</button>
            <button class="mode-btn" onclick="setMode('tohoku')">東北弁</button>
            <button class="mode-btn" onclick="setMode('kansai')">関西弁</button>
            <button class="mode-btn" onclick="setMode('hakata')">博多弁</button>
            <button class="mode-btn" onclick="setMode('tosa')">土佐弁</button>
        </div>

        <div id="icon" class="header-icon">🥷</div>
        <h1 id="title">伊賀弁で励ますで！</h1>
        
<<<<<<< HEAD
        <div class="category-selector" id="categorySelector">
            <button class="category-btn active" onclick="setCategory('all')">すべて</button>
            <button class="category-btn" onclick="setCategory('tired')">疲れた時</button>
            <button class="category-btn" onclick="setCategory('sad')">落ち込んだ時</button>
            <button class="category-btn" onclick="setCategory('motivation')">頑張りたい時</button>
            <button class="category-btn" onclick="setCategory('rest')">休みたい時</button>
        </div>

=======
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
        <div class="display-area" id="bubble">
            <div id="message">やる気出えへん時、<br>押してみだーこ！</div>
        </div>

        <button class="btn-push" id="btnPush">励ましてな！</button>
        
<<<<<<< HEAD
        <div class="action-buttons">
            <button class="btn-action" id="btnSpeak" onclick="speakMessage()" title="メッセージを読み上げ">
                🔊 読み上げ
            </button>
            <button class="btn-action" id="btnShare" onclick="shareMessage()" title="メッセージをシェア">
                📤 シェア
            </button>
        </div>
        
=======
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
        <div class="footer" id="footerText">
            伊賀の忍者が応援しとるで！
        </div>
    </div>

    <script>
<<<<<<< HEAD
        // メッセージをカテゴリー付きオブジェクトに変換するヘルパー関数
        function createMessages(messagesArray, categories) {
            return messagesArray.map((msg, index) => ({
                text: msg,
                category: categories[index] || 'all'
            }));
        }

        const dialectData = {
            iga: {
                title: "伊賀弁で励ますで！", icon: "🥷", color: "#FFD93D", footer: "伊賀の忍者が応援しとるで！",
                messages: createMessages([
=======
        const dialectData = {
            iga: {
                title: "伊賀弁で励ますで！", icon: "🥷", color: "#FFD93D", footer: "伊賀の忍者が応援しとるで！",
                messages: [
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
                    "さあ、ぼちぼちいこか！",
                    "あんたなら、きっとできるわ。やってみだーこ！",
                    "無理せんと、一回お茶でも飲みな。あせらんと！",
                    "ようやっとるわ。自分を褒めてやってな。",
                    "応援しとるでな！しっかりな！",
                    "伊賀の忍者のように、粘り強くやで！",
                    "あんたの味方はここにおるさかいな！",
                    "焦らんでもええんさ。道は続くでな。",
                    "ちょっと休憩や。いがまんじゅうでも食べやん？",
                    "ええ顔しとるやんか。その調子や！",
                    "無理は禁物やで。体大事にしな。",
                    "あきらめたらあかんで。一歩ずつや。",
                    "あんたの努力、わかっとる人はわかっとる。",
                    "今日はもうゆっくり寝や。明日は明日の風が吹く。",
                    "たまには肩の力抜いて、深呼吸してみだーこ。",
                    "しんどい時は「しんどい」って言うてええんやで。",
                    "あんたが笑っとるのが一番や。",
                    "自分のペースで歩いていこ。それが一番の近道や。",
                    "そんなに気負わんでもええ。ありのままのあんたで。",
                    "ええことあるよに願っとるでな！",
                    "忍び足で一歩ずつ、着実にいこな。",
                    "あんたの代わりはおらへん。自分を大事にな。",
                    "しんどい時は、うちに甘えてええんやで。",
                    "まっすぐ前見て。ええ景色が見えるはずやわ。",
                    "あんたの誠実さは、みんなに伝わっとるで。",
                    "肩甲骨回して、心もほぐしてみだーこ。",
                    "よう頑張ったな。今日は花丸やで！",
                    "大丈夫、なんとかなるさかい。気楽にいこ。",
                    "お疲れさん。ゆっくり休んで、また明日な。",
                    "あんたはうちの自慢や。自信持ってな！"
<<<<<<< HEAD
                ], ['motivation', 'motivation', 'rest', 'motivation', 'motivation', 'motivation', 'sad', 'sad', 'rest', 'motivation', 'tired', 'sad', 'motivation', 'rest', 'tired', 'sad', 'motivation', 'sad', 'sad', 'motivation', 'motivation', 'tired', 'sad', 'motivation', 'motivation', 'tired', 'motivation', 'sad', 'rest', 'motivation'])
            },
            okinawa: {
                title: "沖縄弁でちばりよー！", icon: "🌺", color: "#FF8A8A", footer: "太陽（てぃだ）が照らしとるよ！",
                messages: createMessages([
=======
                ]
            },
            okinawa: {
                title: "沖縄弁でちばりよー！", icon: "🌺", color: "#FF8A8A", footer: "太陽（てぃだ）が照らしとるよ！",
                messages: [
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
                    "なんくるないさー！焦らんでええよ。",
                    "ちばりよー！あんたなら出来るさぁ。",
                    "まくとぅそーけー、なんくるないさ。",
                    "いちゃりばちょーでー、みんな応援しとるよ！",
                    "さんしん弾いて、心ゆったりさせようねー。",
                    "命どぅ宝。無理しすぎんのが一番さぁ。",
                    "明日からまた、カメーカメーして元気出そう！",
                    "てぃだ（太陽）は必ず昇るから大丈夫さぁ。",
                    "ちゅら海見て、心洗濯しようね。",
                    "あんたの笑顔が一番の宝物さ。",
                    "あわてぃーはーてぃーせんでもええよ。",
                    "ガジュマルの木みたいに、どっしり構えようね。",
                    "ゴーヤー食べて、苦難も笑い飛ばそう！",
                    "かなさんどー、応援しとるよ！",
                    "海ぬ風が、あんたの背中押してくれるさ。",
                    "ゆいまーるの心で、助け合っていこうね。",
                    "今日もお疲れさん。オリオンビールでも飲んで休もうね。",
                    "焦らず一歩ずつ。カメさんみたいにね。",
                    "なんくるない、なんくるない。心穏やかに。",
                    "あんたのペースが、一番いいペースさぁ。",
                    "ニライカナイから幸運がやってくるさぁ。",
                    "ティーダアミ（天気雨）の後は、綺麗な虹が出るよ。",
                    "ゆったり、てーげー（適当）でいい時もあるさ。",
                    "あんたのちむぐくる（真真心）は、美しすぎるよ。",
                    "一休みして、サーターアンダギー食べようね。",
                    "焦らない、焦らない。島の時間はゆっくり流れるさ。",
                    "空の青さに癒されて、また明日から頑張ろうね。",
                    "あんた、上等（ジョートー）だよ！最高さ！",
                    "くくる（心）を大切に、一歩ずつ進もうね。",
                    "ハイサイ！元気な挨拶で、運気も上がるよ！"
<<<<<<< HEAD
                ], ['sad', 'motivation', 'sad', 'motivation', 'rest', 'tired', 'motivation', 'sad', 'rest', 'motivation', 'sad', 'sad', 'motivation', 'motivation', 'motivation', 'motivation', 'rest', 'sad', 'sad', 'motivation', 'sad', 'rest', 'motivation', 'rest', 'sad', 'motivation', 'motivation', 'motivation', 'motivation', 'motivation'])
            },
            tohoku: {
                title: "東北弁でけっぱれ！", icon: "🌾", color: "#A2D2FF", footer: "あったけぇ心で応援してるぞ。",
                messages: createMessages([
=======
                ]
            },
            tohoku: {
                title: "東北弁でけっぱれ！", icon: "🌾", color: "#A2D2FF", footer: "あったけぇ心で応援してるぞ。",
                messages: [
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
                    "けっぱれ！応援してるがらな。",
                    "んだんだ。ゆっくりでいいんだ。無理しねでけろ。",
                    "おだづなよって言われんくらい頑張るべ！",
                    "まんず、お茶飲んで一休みすっぺ。",
                    "じぇじぇじぇ！あんた、すごいのう！",
                    "寒さに負けねで、体大事にせねばねぞ。",
                    "ええあんばいに、ぼちぼちやんべ。",
                    "おめえさんの頑張り、神様見てっからな。",
                    "こびる（間食）食べて、力蓄えっぺ。",
                    "焦んなって。雪解けは必ず来るがら。",
                    "あべ、一緒に前向いて歩ぐべ。",
                    "んだべ。あんたなら絶対大丈夫だ。",
                    "へば、また明日から頑張ればいいべ。",
                    "お疲れさん。あったけぇ風呂入って寝ろな。",
                    "心さ、火を灯してけっぱれよ。",
                    "うめぇもん食って、悩みなんか飛ばしてまえ。",
                    "一歩一歩、地道にいくのが東北流だ。",
                    "へばな！また笑って会おうな。",
                    "負けねでけろ。あんたは強い人だ。",
                    "おらだぢが、ついてっからな。",
                    "吹雪の後は、最高の晴天が待ってるぞ。",
                    "あんたの優しさは、ずんだ餅みたいに甘くて温けぇ。",
                    "無理に笑わなくてもいい。泣きたい時は泣げ。",
                    "地味でも、コツコツやってるあんたが一番だ。",
                    "まんず、腹いっぱい食べて、ゆっくり寝なせ。",
                    "あんたの努力、黄金の稲穂みたいに実るぞ。",
                    "へば、気合い入れて、もうちょっけ頑張るべ！",
                    "大丈夫だ、大丈夫だ。みんな見守ってるがら。",
                    "あんた、立派だ。本当によく頑張ったな。",
                    "冬は必ず春になる。信じて進むべ。"
<<<<<<< HEAD
                ], ['motivation', 'sad', 'motivation', 'rest', 'motivation', 'tired', 'sad', 'motivation', 'rest', 'sad', 'motivation', 'motivation', 'sad', 'rest', 'motivation', 'rest', 'motivation', 'motivation', 'sad', 'motivation', 'sad', 'sad', 'motivation', 'rest', 'motivation', 'motivation', 'sad', 'motivation', 'sad', 'motivation'])
            },
            kansai: {
                title: "関西弁で応援や！", icon: "🐙", color: "#F48FB1", footer: "笑う門には福来るやで！",
                messages: createMessages([
=======
                ]
            },
            kansai: {
                title: "関西弁で応援や！", icon: "🐙", color: "#F48FB1", footer: "笑う門には福来るやで！",
                messages: [
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
                    "ええやんか！自分信じていきや！",
                    "がんばりや！あんたの根性は本物やで。",
                    "しらんけど、絶対うまくいくわ！",
                    "あかん時はあかん！寝て忘れるんが一番や！",
                    "なんぼのもんじゃい！気合やで！",
                    "自分、めっちゃイケてるやん。自信持ちぃな。",
                    "アホなこと言うて笑ろて、元気出そか！",
                    "おもろいこと考えて、パーッといこや！",
                    "自分らしくやるんが、一番かっこええんやで。",
                    "飴ちゃんあげるから、元気出しぃや！",
                    "どないしたん？話聞くで。気楽にいき！",
                    "そんなに悩まんでも、なんとかなるって！",
                    "今日はごっつ頑張ったな。自分にご褒美や！",
                    "たこ焼き食べて、ほっぺた落として元気出そ！",
                    "しゃあない！次はええことあるわ！",
                    "あんたのパワー、半端ないで！期待しとるわ！",
                    "シュッと立ち直って、また走ればええねん。",
                    "笑ろとけ笑ろとけ！悩みなんか飛んでいくわ。",
                    "自分なら余裕やろ？知らんけど！",
                    "ガッツやで！応援しとるさかいな！",
                    "人生、ボケてツッコんで、明るくいこや！",
                    "あんたのキャラ、最高やん。そのまま突き進め！",
                    "無理してええカッコしな。素の自分が一番や。",
                    "チャンスはそこら中に落ちてるで。拾いにいこ！",
                    "今日がダメでも、明日がある。死ぬ気で遊べ！",
                    "あんた、ホンマにええ顔しとるな。惚れそうやわ。",
                    "しんどい時は、うちに言いや。全力で受け止めるで。",
                    "ええ風吹かせてるやん！その調子や！",
                    "自分は自分の道、しゃきしゃき歩きや！",
                    "お疲れ！パーッと美味いもん食べにいこか！"
<<<<<<< HEAD
                ], ['motivation', 'motivation', 'motivation', 'rest', 'motivation', 'motivation', 'sad', 'motivation', 'motivation', 'motivation', 'sad', 'sad', 'motivation', 'rest', 'sad', 'motivation', 'sad', 'sad', 'motivation', 'motivation', 'motivation', 'motivation', 'sad', 'motivation', 'sad', 'motivation', 'sad', 'motivation', 'motivation', 'rest'])
            },
            hakata: {
                title: "博多弁でよかよー！", icon: "🍜", color: "#FFCC80", footer: "おいしいもん食べにいこーや！",
                messages: createMessages([
=======
                ]
            },
            hakata: {
                title: "博多弁でよかよー！", icon: "🍜", color: "#FFCC80", footer: "おいしいもん食べにいこーや！",
                messages: [
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
                    "がんばりーね！ずっと見守っとるよ。",
                    "よかよー、失敗したってよかよー！",
                    "あんた、ようやっとる。好いとーよ！",
                    "ばりすごいやん！自信もっていいとよ。",
                    "なんしようと？無理したらいかんよ。",
                    "きんしゃい、きんしゃい。みんな仲間たい。",
                    "明日は明日の風が吹くけん、大丈夫ばい！",
                    "ラーメン食べて、替玉して元気出さんね？",
                    "よかよか、気にせんで。次があるけん。",
                    "あんたの努力、ばり輝いとるよ。",
                    "あきらめたらいかんとよ。応援しとるけんね。",
                    "ちかっぱ頑張っとるの、知っとるよ。",
                    "一休みして、また歩き出せばよか。",
                    "笑顔が一番たい。笑ってみんね？",
                    "あんたなら、どんあ壁も乗り越えられるばい！",
                    "好いとーよ、その真っ直ぐなところ。",
                    "お疲れさん。明日はもっとよか日になるよ。",
                    "信じとるけんね。自分の道ば行きんしゃい。",
                    "ばり応援しとるけん、安心して。",
                    "よか風が吹きよる。今がチャンスたい！",
                    "あんたのペースで、よか。急がんでよか。",
                    "しんどい時は、うちに甘えてよかよ。",
                    "心ば温めて、また明日からけっぱろう！",
                    "山笠みたいに、熱く走り抜けるばい！",
                    "あんたの優しさは、明太子みたいにピリッと温かい。",
                    "大丈夫、うちがついとるけん。心配せんで。",
                    "今日も一日、本当にお疲れ様。誇りに思うよ。",
                    "あんたならやれる、そう信じとるばい。",
                    "たまには弱音ば吐いてもよかとよ。受け止めるけん。",
                    "美味しいもん食べて、幸せな夢ば見てね。"
<<<<<<< HEAD
                ], ['motivation', 'sad', 'motivation', 'motivation', 'tired', 'motivation', 'sad', 'rest', 'sad', 'motivation', 'sad', 'motivation', 'rest', 'motivation', 'motivation', 'motivation', 'rest', 'motivation', 'motivation', 'motivation', 'sad', 'sad', 'motivation', 'motivation', 'motivation', 'sad', 'rest', 'motivation', 'sad', 'rest'])
            },
            tosa: {
                title: "土佐弁でいくぜよ！", icon: "🐳", color: "#BCAAA4", footer: "太平洋のような心でいこう！",
                messages: createMessages([
=======
                ]
            },
            tosa: {
                title: "土佐弁でいくぜよ！", icon: "🐳", color: "#BCAAA4", footer: "太平洋のような心でいこう！",
                messages: [
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
                    "頑張っちゅうねえ。まっこと感心するぜよ！",
                    "日本の夜明けは近いぜよ！前を向くがじゃ！",
                    "こじゃんと応援しちゅうきね。",
                    "おまさんなら、きっとやれる。信じちゅう！",
                    "たまるか！負けちょれんぜよ！",
                    "一献飲んで、悩みなんか吹き飛ばすがよ！",
                    "龍馬も言いよった、志を持って進むがじゃ！",
                    "太平洋を見てみ。悩みなんかちっぽけなぜよ！",
                    "まっこと、おまさんの根性はすごいがじゃ。",
                    "あせらんと、どっしり構えていき。",
                    "今日も一日、ようやった。自分を褒めるがぜよ！",
                    "あきらめるのはまだ早いき。これからぜよ！",
                    "こじゃんとええ顔になっちゅう。そのままいけ！",
                    "高知の太陽みたいに、熱く生きるがじゃ。",
                    "負けたらあかん、負けたらあかんぜよ！",
                    "自由は土佐の山間より出づ。自由にやるがぜよ！",
                    "心に龍馬を。前を向いて歩くがじゃ！",
                    "たまるか！おまさんの底力、見せてやれ！",
                    "お疲れ。今日はカツオでも食べて精をつけるがよ。",
                    "信じた道を行く。それが一番幸せなぜよ！",
                    "まっこと、おまさんの誠実さは宝物ぜよ。",
                    "荒波を越えて、新しい世界へ行くがじゃ！",
                    "誰が何と言おうと、うちは味方ぜよ。",
                    "一歩一歩、桂浜を歩くように着実にいこう。",
                    "おまさんの情熱、まっこと火傷しそうぜよ！",
                    "しんどい時は、太平洋に向かって叫ぶがよ！",
                    "大丈夫、うちが背中をどんと押してやるき。",
                    "あんたの勇気、日本の夜明けを連れてくるぜよ。",
                    "こじゃんと休んで、また明日から暴れるがじゃ！",
                    "最高の人生を、自分で切り開くがぜよ！"
<<<<<<< HEAD
                ], ['motivation', 'motivation', 'motivation', 'motivation', 'motivation', 'rest', 'motivation', 'sad', 'motivation', 'sad', 'motivation', 'motivation', 'motivation', 'motivation', 'motivation', 'motivation', 'motivation', 'motivation', 'rest', 'motivation', 'motivation', 'motivation', 'motivation', 'motivation', 'motivation', 'sad', 'motivation', 'motivation', 'rest', 'motivation'])
=======
                ]
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
            }
        };

        let currentMode = 'iga';
<<<<<<< HEAD
        let currentCategory = 'all';
        let currentMessage = '';
        let messageEl, btnPush, titleEl, iconEl, footerEl, bubbleEl;
        let synth = window.speechSynthesis;
        let isSpeaking = false;
        let comboCount = 0;
        let lastTapTime = 0;
        let comboTimeout = null;
        let audioContext = null;

        // DOM要素が読み込まれた後に初期化
        document.addEventListener('DOMContentLoaded', function() {
            messageEl = document.getElementById('message');
            btnPush = document.getElementById('btnPush');
            titleEl = document.getElementById('title');
            iconEl = document.getElementById('icon');
            footerEl = document.getElementById('footerText');
            bubbleEl = document.getElementById('bubble');

            // 要素が存在することを確認
            if (!messageEl || !btnPush || !titleEl || !iconEl || !footerEl) {
                console.error('必要なDOM要素が見つかりません');
                return;
            }

            // イベントリスナーを設定
            btnPush.addEventListener('click', updateMessage);
            
            // 音声読み上げのサポート確認
            if (!('speechSynthesis' in window)) {
                const btnSpeak = document.getElementById('btnSpeak');
                if (btnSpeak) {
                    btnSpeak.disabled = true;
                    btnSpeak.title = 'お使いのブラウザでは音声読み上げに対応していません';
                }
            }

            // Web Audio APIの初期化（ユーザー操作後に初期化）
            // 最初のクリック時に初期化される
        });

        function setMode(mode) {
            if (!dialectData[mode]) {
                console.error('無効なモード:', mode);
                return;
            }
            
            currentMode = mode;
            const data = dialectData[mode];
            
            if (!messageEl || !titleEl || !iconEl || !footerEl) {
                // DOM要素がまだ読み込まれていない場合は少し待つ
                setTimeout(() => setMode(mode), 100);
                return;
            }
            
=======
        const messageEl = document.getElementById('message');
        const btnPush = document.getElementById('btnPush');
        const titleEl = document.getElementById('title');
        const iconEl = document.getElementById('icon');
        const footerEl = document.getElementById('footerText');
        const bubbleEl = document.getElementById('bubble');

        function setMode(mode) {
            currentMode = mode;
            const data = dialectData[mode];
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
            document.documentElement.style.setProperty('--current-theme-color', data.color);
            titleEl.innerText = data.title;
            iconEl.innerText = data.icon;
            footerEl.innerText = data.footer;

            document.querySelectorAll('.mode-btn').forEach(btn => {
                btn.classList.remove('active');
                if((mode === 'iga' && btn.innerText.includes('伊賀')) ||
                   (mode === 'okinawa' && btn.innerText.includes('沖縄')) ||
                   (mode === 'tohoku' && btn.innerText.includes('東北')) ||
                   (mode === 'kansai' && btn.innerText.includes('関西')) ||
                   (mode === 'hakata' && btn.innerText.includes('博多')) ||
                   (mode === 'tosa' && btn.innerText.includes('土佐'))) {
                    btn.classList.add('active');
                }
            });

<<<<<<< HEAD
            if (messageEl) {
                messageEl.classList.add('fade-out');
                setTimeout(() => {
                    const initialMessages = {
                        'iga': "やる気出えへん時、\n押してみだーこ！",
                        'okinawa': "ちばりよー！\nボタンを押してみてねー！",
                        'tohoku': "けっぱれ！\nボタンを押してみっぺ！",
                        'kansai': "ええやんか！\nボタンを押してみや！",
                        'hakata': "よかよー！\nボタンを押してみんね！",
                        'tosa': "いくぜよ！\nボタンを押してみがじゃ！"
                    };
                    const initialMsg = initialMessages[mode] || "ボタンを押してみてください！";
                    messageEl.innerText = initialMsg;
                    currentMessage = initialMsg;
                    messageEl.classList.remove('fade-out');
                }, 200);
            }
            
            if (iconEl) {
                triggerBounce();
            }
        }

        function triggerBounce() {
            if (!iconEl) return;
=======
            messageEl.classList.add('fade-out');
            setTimeout(() => {
                messageEl.innerText = "モードを変えたで！\n心を込めて励ますさかい、\nボタンを押してみだーこ。";
                messageEl.classList.remove('fade-out');
            }, 200);
            triggerBounce();
        }

        function triggerBounce() {
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
            iconEl.classList.remove('bounce');
            void iconEl.offsetWidth;
            iconEl.classList.add('bounce');
        }

<<<<<<< HEAD
        function setCategory(category) {
            currentCategory = category;
            
            // カテゴリーボタンのアクティブ状態を更新
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if ((category === 'all' && btn.innerText.includes('すべて')) ||
                    (category === 'tired' && btn.innerText.includes('疲れた')) ||
                    (category === 'sad' && btn.innerText.includes('落ち込んだ')) ||
                    (category === 'motivation' && btn.innerText.includes('頑張りたい')) ||
                    (category === 'rest' && btn.innerText.includes('休みたい'))) {
                    btn.classList.add('active');
                }
            });
        }

        function getFilteredMessages() {
            if (!dialectData[currentMode]) return [];
            
            const allMessages = dialectData[currentMode].messages;
            if (currentCategory === 'all') {
                return allMessages;
            }
            
            return allMessages.filter(msg => msg.category === currentCategory);
        }

        function updateMessage() {
            if (!messageEl || !dialectData[currentMode]) return;
            
            // 連続タップ検出
            const now = Date.now();
            if (now - lastTapTime < 2000) {
                comboCount++;
            } else {
                comboCount = 1;
            }
            lastTapTime = now;

            // ボタンエフェクト
            if (btnPush) {
                btnPush.classList.add('impact');
                setTimeout(() => btnPush.classList.remove('impact'), 300);
            }

            // サウンドエフェクト
            playSoundEffect(comboCount);

            // バイブレーション
            vibrate(comboCount);

            // 画面シェイク
            document.body.classList.add('shake');
            setTimeout(() => document.body.classList.remove('shake'), 500);

            messageEl.classList.add('fade-out');
            setTimeout(() => {
                const filteredList = getFilteredMessages();
                if (!filteredList || filteredList.length === 0) {
                    messageEl.innerText = 'このカテゴリーにはメッセージがありません';
                    messageEl.classList.remove('fade-out');
                    return;
                }
                
                let selectedMsg = filteredList[Math.floor(Math.random() * filteredList.length)];
                const currentText = messageEl.innerText.trim();
                
                // 同じメッセージが表示されている場合は次のメッセージを選ぶ
                if (selectedMsg.text === currentText && filteredList.length > 1) {
                    const currentIndex = filteredList.findIndex(msg => msg.text === currentText);
                    selectedMsg = filteredList[(currentIndex + 1) % filteredList.length];
                }
                
                currentMessage = selectedMsg.text;
                messageEl.innerText = currentMessage;
                messageEl.classList.remove('fade-out');
                messageEl.classList.add('message-pop');
                
                // 連続タップで特別エフェクト
                if (comboCount >= 3) {
                    messageEl.classList.add('rainbow-text');
                    createParticles(comboCount * 5);
                    showComboCounter(comboCount);
                } else {
                    messageEl.classList.remove('rainbow-text');
                    createParticles(10);
                }
                
                setTimeout(() => {
                    messageEl.classList.remove('message-pop');
                }, 400);
                
                triggerBounce();

                // コンボタイムアウト
                clearTimeout(comboTimeout);
                comboTimeout = setTimeout(() => {
                    comboCount = 0;
                    hideComboCounter();
                }, 2000);
            }, 200);
        }

        function speakMessage() {
            if (!('speechSynthesis' in window)) {
                alert('お使いのブラウザでは音声読み上げに対応していません');
                return;
            }

            const message = currentMessage || messageEl.innerText.trim();
            if (!message) return;

            // 既に読み上げ中の場合は停止
            if (isSpeaking) {
                synth.cancel();
                isSpeaking = false;
                const btnSpeak = document.getElementById('btnSpeak');
                if (btnSpeak) {
                    btnSpeak.classList.remove('speaking');
                    btnSpeak.innerText = '🔊 読み上げ';
                }
                return;
            }

            // 読み上げを停止してから新しい読み上げを開始
            synth.cancel();

            const utterance = new SpeechSynthesisUtterance(message);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.9;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            const btnSpeak = document.getElementById('btnSpeak');
            
            utterance.onstart = function() {
                isSpeaking = true;
                if (btnSpeak) {
                    btnSpeak.classList.add('speaking');
                    btnSpeak.innerText = '⏸ 停止';
                }
            };

            utterance.onend = function() {
                isSpeaking = false;
                if (btnSpeak) {
                    btnSpeak.classList.remove('speaking');
                    btnSpeak.innerText = '🔊 読み上げ';
                }
            };

            utterance.onerror = function() {
                isSpeaking = false;
                if (btnSpeak) {
                    btnSpeak.classList.remove('speaking');
                    btnSpeak.innerText = '🔊 読み上げ';
                }
                alert('音声読み上げでエラーが発生しました');
            };

            synth.speak(utterance);
        }

        function shareMessage() {
            const message = currentMessage || messageEl.innerText.trim();
            const dialectName = {
                'iga': '伊賀弁',
                'okinawa': '沖縄弁',
                'tohoku': '東北弁',
                'kansai': '関西弁',
                'hakata': '博多弁',
                'tosa': '土佐弁'
            }[currentMode] || '方言';

            const shareText = `${dialectName}で励ましてもらった！\n\n「${message}」\n\n#方言励ましアプリ`;

            // Web Share APIが利用可能な場合
            if (navigator.share) {
                navigator.share({
                    title: '方言励ましアプリ',
                    text: shareText,
                    url: window.location.href
                }).catch(err => {
                    console.log('シェアがキャンセルされました', err);
                });
            } else {
                // フォールバック: クリップボードにコピー
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(shareText).then(() => {
                        alert('メッセージをクリップボードにコピーしました！\n\n' + shareText);
                    }).catch(err => {
                        console.error('コピーに失敗しました', err);
                        fallbackCopy(shareText);
                    });
                } else {
                    fallbackCopy(shareText);
                }
            }
        }

        function fallbackCopy(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                alert('メッセージをクリップボードにコピーしました！\n\n' + text);
            } catch (err) {
                alert('シェア機能を使用できません。メッセージを手動でコピーしてください：\n\n' + text);
            }
            document.body.removeChild(textarea);
        }

        // パーティクルエフェクト
        function createParticles(count = 20) {
            const particlesContainer = document.getElementById('particles');
            if (!particlesContainer) return;

            const colors = ['#FFD93D', '#FF8400', '#FF8A8A', '#A2D2FF', '#F48FB1', '#FFCC80', '#BCAAA4'];
            const currentColor = dialectData[currentMode]?.color || '#FFD93D';

            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 8 + 5;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = '-10px';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.animationDelay = Math.random() * 0.5 + 's';
                particle.style.animationDuration = (Math.random() * 1 + 1.5) + 's';

                particlesContainer.appendChild(particle);

                setTimeout(() => {
                    particle.remove();
                }, 3000);
            }
        }

        // サウンドエフェクト
        function playSoundEffect(combo) {
            // Web Audio APIの初期化（ユーザー操作後に初期化）
            if (!audioContext) {
                try {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                } catch (e) {
                    return; // Web Audio APIが利用できない
                }
            }

            // サスペンド状態の場合は再開
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }

            try {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                // コンボ数に応じて音程を変える
                const baseFreq = 200;
                const freq = baseFreq + (combo * 50);
                oscillator.frequency.value = Math.min(freq, 800);
                oscillator.type = combo >= 3 ? 'sine' : 'square';

                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (e) {
                console.log('サウンドエフェクトの再生に失敗しました');
            }
        }

        // バイブレーション
        function vibrate(combo) {
            if (!navigator.vibrate) return;

            const pattern = combo >= 3 
                ? [50, 30, 50, 30, 50]  // 連続タップ時は長め
                : [30];  // 通常は短め

            navigator.vibrate(pattern);
        }

        // コンボカウンター表示
        function showComboCounter(count) {
            const counter = document.getElementById('comboCounter');
            if (!counter) return;

            counter.textContent = `${count}連続！`;
            counter.classList.add('show');
            counter.classList.add('combo');
            
            setTimeout(() => {
                counter.classList.remove('combo');
            }, 500);
        }

        function hideComboCounter() {
            const counter = document.getElementById('comboCounter');
            if (counter) {
                counter.classList.remove('show');
            }
        }
=======
        function updateMessage() {
            messageEl.classList.add('fade-out');
            setTimeout(() => {
                const list = dialectData[currentMode].messages;
                let newMessage = list[Math.floor(Math.random() * list.length)];
                if (newMessage === messageEl.innerText) {
                    newMessage = list[(list.indexOf(newMessage) + 1) % list.length];
                }
                messageEl.innerText = newMessage;
                messageEl.classList.remove('fade-out');
                triggerBounce();
            }, 200);
        }

        btnPush.addEventListener('click', updateMessage);
>>>>>>> b769a3fa270304d2956e05617451c473c8f69bff
    </script>
</body>
</html>
