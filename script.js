Function closeNotif() {
    Const notif = document.getElementById('floatingNotif');
    Notif.classList.add('hidden');
    SetTimeout(() => {
        Notif.style.display = 'none';
    }, 400);
}

Async function getUserInfo() {
    Try {
        Const res = await fetch('https://ip-api.com/json/');
        Const data = await res.json();
        If (data.status === 'success') {
            Document.getElementById('userCountry').textContent = data.country || '-';
        } else {
            Document.getElementById('userCountry').textContent = 'Tidak terdeteksi';
        }
    } catch {
        Document.getElementById('userCountry').textContent = 'Tidak terdeteksi';
    }

    Const ua = navigator.userAgent;
    Let device = 'Desktop';
    Let brand = '';
    If (/iPhone/i.test(ua)) { device = 'Mobile'; brand = 'iPhone'; }
    Else if (/iPad/i.test(ua)) { device = 'Tablet'; brand = 'iPad'; }
    Else if (/Samsung|SM-|Galaxy/i.test(ua)) { device = 'Mobile'; brand = 'Samsung'; }
    Else if (/Xiaomi|Redmi|POCO/i.test(ua)) { device = 'Mobile'; brand = 'Xiaomi'; }
    Else if (/Oppo|Realme|OnePlus/i.test(ua)) { device = 'Mobile'; brand = 'Oppo'; }
    Else if (/Vivo|iQOO/i.test(ua)) { device = 'Mobile'; brand = 'Vivo'; }
    Else if (/Google Pixel/i.test(ua)) { device = 'Mobile'; brand = 'Google Pixel'; }
    Else if (/Nokia/i.test(ua)) { device = 'Mobile'; brand = 'Nokia'; }
    Else if (/Huawei|Honor/i.test(ua)) { device = 'Mobile'; brand = 'Huawei'; }
    Else if (/ASUS|ZenFone|ROG/i.test(ua)) { device = 'Mobile'; brand = 'ASUS'; }
    Else if (/Lenovo|Moto/i.test(ua)) { device = 'Mobile'; brand = 'Lenovo'; }
    Else if (/Android/i.test(ua)) { device = 'Mobile'; brand = 'Android'; }
    Document.getElementById('userDevice').textContent = brand ? `${brand}` : device;

    Let browser = 'Unknown';
    If (ua.includes('Chrome') && !ua.includes('Edg') && !ua.includes('OPR')) browser = 'Chrome';
    Else if (ua.includes('Firefox')) browser = 'Firefox';
    Else if (ua.includes('Safari') && !ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Safari';
    Else if (ua.includes('Edg')) browser = 'Edge';
    Else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';
    Else if (ua.includes('UCBrowser')) browser = 'UC Browser';
    Else if (ua.includes('SamsungBrowser')) browser = 'Samsung Internet';
    Document.getElementById('userBrowser').textContent = browser;
    Document.getElementById('userStatus').textContent = '● Online';

    If (navigator.getBattery) {
        Try {
            Const battery = await navigator.getBattery();
            Const level = Math.round(battery.level * 100);
            Document.getElementById('batteryFill').style.width = level + '%';
            Document.getElementById('batteryPercent').textContent = level + '%';
        } catch {}
    }
}
getUserInfo();

Const toolsData = {
    Downloader: [
        { id: 'instagram', icon: 'fa-brands fa-instagram', name: 'Instagram', desc: 'Download video & foto', badge: 'HD' },
        { id: 'tiktok', icon: 'fa-brands fa-tiktok', name: 'TikTok', desc: 'No watermark', badge: 'MP4' },
        { id: 'youtube', icon: 'fa-brands fa-youtube', name: 'YouTube', desc: 'Video & audio', badge: 'MP4/MP3' }
    ],
    Maker: [
        { id: 'iqc', icon: 'fa-solid fa-image', name: 'IQC Generator', desc: 'Buat gambar IQC', badge: 'Custom' },
        { id: 'winquotes', icon: 'fa-brands fa-windows', name: 'Windows Quotes', desc: 'Quote ala Windows', badge: 'Meme' },
        { id: 'tanyaustadz', icon: 'fa-solid fa-user-tie', name: 'Tanya Ustadz', desc: 'Meme generator', badge: 'Lucu' }
    ],
    Tools: [
        { id: 'qr', icon: 'fa-solid fa-qrcode', name: 'QR Generator', desc: 'Buat QR code', badge: 'Instant' },
        { id: 'calc', icon: 'fa-solid fa-calculator', name: 'Calculator', desc: 'Hitung cepat', badge: 'Math' },
        { id: 'pwgen', icon: 'fa-solid fa-key', name: 'Password Gen', desc: 'Password aman', badge: 'Secure' },
        { id: 'morse', icon: 'fa-solid fa-broadcast', name: 'Morse Code', desc: 'Konversi morse', badge: 'Audio' },
        { id: 'removebg', icon: 'fa-solid fa-eraser', name: 'Remove BG', desc: 'Hapus background', badge: 'AI' },
        { id: 'enhancer', icon: 'fa-solid fa-magic', name: 'Image Enhancer', desc: 'Tingkatkan kualitas', badge: 'HD' }
    ],
    Vault: [
        { id: 'iqcgen', icon: 'fa-solid fa-qrcode', name: 'Iqc Generator', desc: 'QR & barcode tools', link: 'https://iqc-generator-bykz.netlify.app/' },
        { id: 'ttquote', icon: 'fa-brands fa-tiktok', name: 'Tiktok Quote', desc: 'Quote generator', link: 'https://tiktok-quote-chatbykz.netlify.app/' },
        { id: 'qrgen', icon: 'fa-solid fa-cube', name: 'Qr Generator', desc: 'QR code maker', link: 'https://qr-generator-bykz.netlify.app/' }
    ],
    External: [
        { id: 'fakeff', icon: 'fa-solid fa-fire', name: 'Fake FF', desc: 'Free Fire simulator', link: 'https://fakeff.netlify.app/' },
        { id: 'getcode', icon: 'fa-solid fa-code', name: 'Get Code HTML', desc: 'Extract & copy', link: 'https://kaze-extract.netlify.app/' },
        { id: 'zxvai', icon: 'fa-solid fa-robot', name: 'ZxVAI', desc: 'AI tools & APK', link: 'https://zxvaiapk.netlify.app/' },
        { id: 'fotolink', icon: 'fa-solid fa-image', name: 'Foto To Link', desc: 'Upload & share', link: 'https://pixvault-bykz.netlify.app/' }
    ]
};

Const allTools = [
    ...toolsData.downloader,
    ...toolsData.maker,
    ...toolsData.tools,
    ...toolsData.vault,
    ...toolsData.external
];

Function renderGrid(containerId, items, isExternal = false) {
    Const container = document.getElementById(containerId);
    If (!container) return;
    Container.innerHTML = items.map(item => {
        Const clickAttr = isExternal || item.link ?
            `onclick="window.open('${item.link || '#'}','_blank')"` :
            `onclick="showTool('${item.id}')"`;
        Return `
            <div class="tools-card" ${clickAttr}>
                <div class="icon"><i class="${item.icon}"></i></div>
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
                ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
                <div class="arrow"><i class="fas fa-arrow-right"></i></div>
            </div>
        `;
    }).join('');
}

Function renderAll() {
    RenderGrid('allGrid', allTools);
    RenderGrid('downloaderGrid', toolsData.downloader);
    RenderGrid('makerGrid', toolsData.maker);
    RenderGrid('toolsGrid', toolsData.tools);
    RenderGrid('vaultGrid', toolsData.vault, true);
    RenderGrid('externalGrid', toolsData.external, true);
}

Document.querySelectorAll('.nav-tab').forEach(tab => {
    Tab.addEventListener('click', function() {
        Document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        This.classList.add('active');
        Const target = this.dataset.tab;
        Document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        Const targetEl = document.getElementById('tab-' + target);
        If (targetEl) targetEl.classList.add('active');
    });
});

Function showTool(toolId) {
    Const viewer = document.getElementById('toolViewer');
    Const body = document.getElementById('toolViewerBody');
    Viewer.classList.add('active');
    Document.body.style.overflow = 'hidden';

    Let tool = null;
    For (let cat of ['downloader', 'maker', 'tools']) {
        Const found = toolsData[cat].find(t => t.id === toolId);
        If (found) { tool = found; break; }
    }
    If (!tool) { closeTool(); return; }

    Switch (toolId) {
        Case 'instagram': renderInstagram(body); break;
        Case 'tiktok': renderTiktok(body); break;
        Case 'youtube': renderYoutube(body); break;
        Case 'iqc': renderIqc(body); break;
        Case 'winquotes': renderWinquotes(body); break;
        Case 'tanyaustadz': renderTanyaUstadz(body); break;
        Case 'qr': renderQr(body); break;
        Case 'calc': renderCalc(body); break;
        Case 'pwgen': renderPwgen(body); break;
        Case 'morse': renderMorse(body); break;
        Case 'removebg': renderRemovebg(body); break;
        Case 'enhancer': renderEnhancer(body); break;
        Default: closeTool();
    }
}

Function closeTool() {
    Document.getElementById('toolViewer').classList.remove('active');
    Document.body.style.overflow = 'auto';
}

Document.getElementById('toolViewer').addEventListener('click', function(e) {
    If (e.target === this) closeTool();
});
Document.addEventListener('keydown', function(e) {
    If (e.key === 'Escape') closeTool();
});

Function renderInstagram(body) {
    Body.innerHTML = `
        <h2><i class="fa-brands fa-instagram"></i> Instagram Downloader</h2>
        <p style="color:#8b7ab8;font-size:13px;margin-bottom:12px;">Download video, Reels, atau foto dari Instagram.</p>
        <input type="text" id="instaUrl" class="v-input" placeholder="Tempel link Instagram...">
        <button class="v-btn" id="instaBtn"><i class="fas fa-download"></i> Ambil Media</button>
        <div id="instaResult"></div>
    `;
    Document.getElementById('instaBtn').onclick = async () => {
        Const url = document.getElementById('instaUrl').value.trim();
        Const target = document.getElementById('instaResult');
        If (!url) return alert('Masukkan link Instagram!');
        Target.innerHTML = `<div class="result-box"><i class="fas fa-spinner spin"></i><br>Memproses...</div>`;
        Try {
            Const res = await fetch(`https://api.nexray.eu.cc/downloader/instagram?url=${encodeURIComponent(url)}`);
            Const data = await res.json();
            Let dl = data.result?.[0]?.url || data.result?.url || data.url;
            If (dl) {
                Target.innerHTML = `
                    <div class="result-box">
                        <video controls style="width:100%;border-radius:8px;" src="${dl}"></video>
                        <br><br>
                        <a href="${dl}" target="_blank" download style="text-decoration:none;">
                            <button class="v-btn" style="background:rgba(168,85,247,0.12);">Download</button>
                        </a>
                    </div>
                `;
            } else {
                Target.innerHTML = `<div class="result-box" style="color:#ef4444;">Gagal ambil media.</div>`;
            }
        } catch (e) {
            Target.innerHTML = `<div class="result-box" style="color:#ef4444;">Error: ${e.message}</div>`;
        }
    };
}

Function renderTiktok(body) {
    Body.innerHTML = `
        <h2><i class="fa-brands fa-tiktok"></i> TikTok Downloader</h2>
        <p style="color:#8b7ab8;font-size:13px;margin-bottom:12px;">Download video TikTok tanpa watermark.</p>
        <input type="text" id="ttUrl" class="v-input" placeholder="Tempel link TikTok...">
        <button class="v-btn" id="ttBtn"><i class="fas fa-download"></i> Ekstrak</button>
        <div id="ttResult"></div>
    `;
    Document.getElementById('ttBtn').onclick = async () => {
        Const url = document.getElementById('ttUrl').value.trim();
        Const target = document.getElementById('ttResult');
        If (!url) return alert('Masukkan URL!');
        Target.innerHTML = `<div class="result-box"><i class="fas fa-spinner spin"></i> Memproses...</div>`;
        Try {
            Const res = await fetch('https://api-faa.my.id/faa/tiktok?url=' + encodeURIComponent(url));
            Const data = await res.json();
            Const video = data?.result?.data || data?.result?.video || data?.result?.url;
            If (video) {
                Target.innerHTML = `
                    <div class="result-box">
                        <video controls style="width:100%;border-radius:8px;" src="${video}"></video>
                        <br><br>
                        <a href="${video}" target="_blank" style="text-decoration:none;">
                            <button class="v-btn" style="background:rgba(168,85,247,0.12);">Download</button>
                        </a>
                    </div>
                `;
            } else {
                Target.innerHTML = `<div class="result-box">Gagal mengambil video.</div>`;
            }
        } catch (e) {
            Target.innerHTML = `<div class="result-box">Error: ${e.message}</div>`;
        }
    };
}

Function renderYoutube(body) {
    Body.innerHTML = `
        <h2><i class="fa-brands fa-youtube"></i> YouTube Downloader</h2>
        <input type="text" id="ytUrl" class="v-input" placeholder="Tempel URL YouTube...">
        <select id="ytFormat" class="v-select" onchange="document.getElementById('resBox').style.display=this.value==='mp3'?'none':'block'">
            <option value="mp4">Video (MP4)</option>
            <option value="mp3">Audio (MP3)</option>
        </select>
        <div id="resBox">
            <select id="ytRes" class="v-select">
                <option value="360">360p</option>
                <option value="720" selected>720p</option>
                <option value="1080">1080p</option>
            </select>
        </div>
        <button class="v-btn" id="ytBtn"><i class="fas fa-play"></i> Proses</button>
        <div id="ytResult"></div>
    `;
    Document.getElementById('ytBtn').onclick = async () => {
        Const url = document.getElementById('ytUrl').value.trim();
        Const fmt = document.getElementById('ytFormat').value;
        Const resSel = document.getElementById('ytRes').value;
        Const target = document.getElementById('ytResult');
        If (!url) return alert('Sertakan URL!');
        Target.innerHTML = `<div class="result-box"><i class="fas fa-spinner spin"></i> Menghubungkan...</div>`;
        Try {
            Let apiUrl = fmt === 'mp3' ?
                `https://api.nexray.eu.cc/downloader/v1/ytmp3?url=${encodeURIComponent(url)}` :
                `https://api.nexray.eu.cc/downloader/ytmp4?url=${encodeURIComponent(url)}&resolusi=${resSel}`;
            Const res = await fetch(apiUrl);
            Const data = await res.json();
            If (data.status && data.result?.url) {
                Let dl = data.result.url;
                Let title = data.result.title || 'YouTube Media';
                Target.innerHTML = `
                    <div class="result-box">
                        <p style="font-size:13px;font-weight:600;">${title}</p>
                        ${fmt === 'mp4' ? `<video controls style="width:100%;border-radius:8px;" src="${dl}"></video>` : `<audio controls style="width:100%;" src="${dl}"></audio>`}
                        <br><br>
                        <a href="${dl}" target="_blank" style="text-decoration:none;">
                            <button class="v-btn" style="background:rgba(168,85,247,0.12);">Download</button>
                        </a>
                    </div>
                `;
            } else {
                Target.innerHTML = `<div class="result-box">Gagal memproses link YouTube.</div>`;
            }
        } catch (e) {
            Target.innerHTML = `<div class="result-box">Error: ${e.message}</div>`;
        }
    };
}

Function renderIqc(body) {
    Let selectedProvider = 'Axis';
    Let globalIqcBlob = '';
    Body.innerHTML = `
        <h2><i class="fas fa-image"></i> IQC Generator</h2>
        <label>Pesan:</label>
        <input type="text" id="iqcText" class="v-input" value="Hai">
        <label>Pilih Operator:</label>
        <div class="provider-buttons">
            <button class="provider-btn active" onclick="window.setIqcProv(this,'Axis')">Axis</button>
            <button class="provider-btn" onclick="window.setIqcProv(this,'Telkomsel')">Telkomsel</button>
            <button class="provider-btn" onclick="window.setIqcProv(this,'Indosat')">Indosat</button>
            <button class="provider-btn" onclick="window.setIqcProv(this,'XL')">XL</button>
            <button class="provider-btn" onclick="window.setIqcProv(this,'Three')">Three</button>
            <button class="provider-btn" onclick="window.setIqcProv(this,'Smartfren')">Smartfren</button>
        </div>
        <div style="display:flex;gap:12px;">
            <div style="flex:1;"><label>Jam:</label><input type="number" id="iqcJam" class="v-input" value="12" min="0" max="23"></div>
            <div style="flex:1;"><label>Baterai (%):</label><input type="number" id="iqcBaterai" class="v-input" value="65" min="0" max="100"></div>
        </div>
        <button class="v-btn" id="iqcGenBtn">Generate</button>
        <div id="iqcResultDiv" style="display:none;">
            <div class="iqc-preview" id="iqcPreviewBox"></div>
            <div class="btn-group">
                <button class="v-btn" id="iqcDlBtn">Download PNG</button>
                <button class="v-btn" id="iqcCopyBtn">Copy URL</button>
            </div>
        </div>
    `;
    Window.setIqcProv = (btn, prov) => {
        Document.querySelectorAll('.provider-btn').forEach(b => b.classList.remove('active'));
        Btn.classList.add('active');
        SelectedProvider = prov;
    };
    Document.getElementById('iqcGenBtn').onclick = async () => {
        Const text = document.getElementById('iqcText').value.trim() || 'Hai';
        Const jam = document.getElementById('iqcJam').value || '12';
        Const bat = document.getElementById('iqcBaterai').value || '65';
        Const resDiv = document.getElementById('iqcResultDiv');
        Const preview = document.getElementById('iqcPreviewBox');
        ResDiv.style.display = 'block';
        Preview.innerHTML = `<div style="color:#8b7ab8;">Menggambar...</div>`;
        Try {
            Const res = await fetch(`https://api.nexray.eu.cc/maker/v1/iqc?text=${encodeURIComponent(text)}&provider=${encodeURIComponent(selectedProvider)}&jam=${jam}&baterai=${bat}`);
            If (!res.ok) throw new Error('Server error.');
            Const blob = await res.blob();
            If (globalIqcBlob) URL.revokeObjectURL(globalIqcBlob);
            GlobalIqcBlob = URL.createObjectURL(blob);
            Preview.innerHTML = `<img src="${globalIqcBlob}" alt="IQC Result">`;
        } catch (e) {
            Preview.innerHTML = `<span style="color:#ef4444;">Gagal: ${e.message}</span>`;
        }
    };
    Document.getElementById('iqcDlBtn').onclick = () => { if (globalIqcBlob) { const a = document.createElement('a'); a.href = globalIqcBlob; a.download = `IQC_${Date.now()}.png`; a.click(); } };
    Document.getElementById('iqcCopyBtn').onclick = () => { if (globalIqcBlob) { navigator.clipboard.writeText(globalIqcBlob); alert('URL disalin!'); } };
}

Function renderWinquotes(body) {
    Body.innerHTML = `
        <h2><i class="fa-brands fa-windows"></i> Windows Quotes</h2>
        <div class="result-box" style="padding:30px;">
            <i class="fas fa-tools" style="font-size:50px;color:#6a5a8a;margin-bottom:15px;display:block;"></i>
            <h3 style="color:#c084fc;margin-bottom:10px;">⛔ Fitur Mati Sementara</h3>
            <p style="color:#b0a0d0;font-size:13px;">Maaf masih belum bisa yaa. Silakan tunggu update selanjutnya.</p>
            <a href="https://whatsapp.com/channel/0029VbDlSilICVfolojMA11Z" target="_blank" class="v-btn" style="background:rgba(37,211,102,0.15);text-decoration:none;display:inline-block;margin-top:12px;width:auto;padding:10px 20px;">
                <i class="fab fa-whatsapp"></i> Ikuti Saluran Admin
            </a>
        </div>
    `;
}

Function renderTanyaUstadz(body) {
    Body.innerHTML = `
        <h2><i class="fas fa-user-tie"></i> Meme Tanya Ustadz</h2>
        <div class="result-box" style="padding:30px;">
            <i class="fas fa-tools" style="font-size:50px;color:#6a5a8a;margin-bottom:15px;display:block;"></i>
            <h3 style="color:#c084fc;margin-bottom:10px;">⛔ Fitur Mati Sementara</h3>
            <p style="color:#b0a0d0;font-size:13px;">Maaf masih belum bisa yaa. Silakan tunggu update selanjutnya.</p>
            <a href="https://whatsapp.com/channel/0029VbDlSilICVfolojMA11Z" target="_blank" class="v-btn" style="background:rgba(37,211,102,0.15);text-decoration:none;display:inline-block;margin-top:12px;width:auto;padding:10px 20px;">
                <i class="fab fa-whatsapp"></i> Ikuti Saluran Admin
            </a>
        </div>
    `;
}

Function renderQr(body) {
    Body.innerHTML = `
        <h2><i class="fas fa-qrcode"></i> QR Code Generator</h2>
        <input type="text" id="qrText" class="v-input" placeholder="Masukkan teks atau URL...">
        <button class="v-btn" id="qrBtn"><i class="fas fa-qrcode"></i> Buat QR</button>
        <div id="qrResult"></div>
    `;
    Document.getElementById('qrBtn').onclick = () => {
        Const t = document.getElementById('qrText').value;
        If (!t) return alert('Input kosong!');
        Const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(t)}&size=400`;
        Document.getElementById('qrResult').innerHTML = `
            <div class="result-box">
                <img src="${qrUrl}" style="width:200px;border-radius:8px;background:white;padding:8px;">
                <br><br>
                <a href="${qrUrl}" download="qr-code.png" target="_blank" style="text-decoration:none;">
                    <button class="v-btn" style="background:rgba(168,85,247,0.12);">Download QR</button>
                </a>
            </div>
        `;
    };
}

Function renderCalc(body) {
    Body.innerHTML = `
        <h2><i class="fas fa-calculator"></i> Calculator</h2>
        <input type="text" id="calcInput" class="v-input" placeholder="Contoh: (50*2)+20">
        <button class="v-btn" id="calcBtn"><i class="fas fa-equals"></i> Hitung</button>
        <div id="calcResult"></div>
    `;
    Document.getElementById('calcBtn').onclick = () => {
        Try {
            Const val = document.getElementById('calcInput').value;
            Const res = Function('"use strict"; return (' + val + ')')();
            Document.getElementById('calcResult').innerHTML = `<div class="result-box" style="font-weight:600;font-size:18px;color:#c084fc;">= ${res}</div>`;
        } catch {
            Document.getElementById('calcResult').innerHTML = `<div class="result-box" style="color:#ef4444;">Format tidak valid.</div>`;
        }
    };
}

Function renderPwgen(body) {
    Body.innerHTML = `
        <h2><i class="fas fa-key"></i> Password Generator</h2>
        <label>Panjang: <span id="lengthVal" style="font-weight:bold;color:#c084fc;">14</span></label>
        <input type="range" id="pwLen" min="8" max="32" value="14" style="width:100%;margin:10px 0;accent-color:#7c3aed;" oninput="document.getElementById('lengthVal').innerText=this.value">
        <button class="v-btn" id="genPwBtn"><i class="fas fa-shield-alt"></i> Generate</button>
        <div id="pwResult"></div>
    `;
    Document.getElementById('genPwBtn').onclick = () => {
        Const len = parseInt(document.getElementById('pwLen').value);
        Const pool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        Let out = "";
        For (let i = 0; i < len; i++) out += pool.charAt(Math.floor(Math.random() * pool.length));
        Document.getElementById('pwResult').innerHTML = `
            <div class="result-box">
                <input type="text" class="v-input" readonly value="${out}" style="text-align:center;font-family:monospace;font-size:16px;background:rgba(168,85,247,0.04);">
                <button class="v-btn" onclick="navigator.clipboard.writeText('${out}'); alert('Disalin!');" style="margin-top:8px;background:rgba(168,85,247,0.12);">Salin</button>
            </div>
        `;
    };
}

Function renderMorse(body) {
    Body.innerHTML = `
        <h2><i class="fas fa-broadcast"></i> Morse Converter</h2>
        <p style="color:#8b7ab8;font-size:13px;margin-bottom:12px;">Konversi teks ke sandi morse atau sebaliknya.</p>
        <select id="morseMode" class="v-select">
            <option value="t2m">Teks ➔ Morse</option>
            <option value="m2t">Morse ➔ Teks</option>
        </select>
        <textarea id="morseIn" class="v-textarea" style="height:80px;resize:none;" placeholder="Ketik di sini..."></textarea>
        <button class="v-btn" id="morseBtn"><i class="fas fa-exchange-alt"></i> Konversi</button>
        <div id="morseResult"></div>
    `;
    Const dict = { 'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/' };
    Const rev = {}; for (let k in dict) rev[dict[k]] = k;
    Document.getElementById('morseBtn').onclick = () => {
        Const mode = document.getElementById('morseMode').value;
        Const val = document.getElementById('morseIn').value.trim().toUpperCase();
        Let out = '';
        If (!val) return alert('Masukkan teks atau morse!');
        If (mode === 't2m') { let arr = []; for (let c of val) { if (dict[c]) arr.push(dict[c]); } out = arr.join(' '); }
        Else { let tokens = val.split(' '); for (let t of tokens) { if (rev[t]) out += rev[t]; else if (t === '') out += ' '; } }
        Document.getElementById('morseResult').innerHTML = `
            <div class="result-box">
                <p style="font-size:12px;color:#8b7ab8;">Hasil:</p>
                <p style="font-family:monospace;font-size:18px;margin-top:5px;font-weight:600;word-break:break-all;letter-spacing:2px;color:#c084fc;">${out}</p>
                ${mode === 't2m' ? `<button class="v-btn" onclick="playMorse('${out}')" style="margin-top:10px;width:auto;padding:6px 16px;font-size:12px;background:rgba(168,85,247,0.08);"><i class="fas fa-volume-up"></i> Putar</button>` : ''}
            </div>
        `;
    };
    Window.playMorse = (morseCode) => {
        Const ctx = new(window.AudioContext || window.webkitAudioContext)();
        Let time = ctx.currentTime;
        Const dot = 0.1, dash = dot * 3;
        MorseCode.split('').forEach(char => {
            If (char === '.' || char === '-') {
                Const osc = ctx.createOscillator();
                Const gain = ctx.createGain();
                Osc.type = 'sine';
                Osc.frequency.setValueAtTime(600, time);
                Const dur = char === '.' ? dot : dash;
                Osc.connect(gain);
                Gain.connect(ctx.destination);
                Gain.gain.setValueAtTime(0.15, time);
                Gain.gain.setValueAtTime(0.15, time + dur);
                Gain.gain.setTargetAtTime(0, time + dur, 0.01);
                Osc.start(time);
                Osc.stop(time + dur + 0.05);
                Time += dur + dot;
            } else if (char === ' ') time += dash;
            else if (char === '/') time += dot * 7;
        });
    };
}

Function renderRemovebg(body) {
    Body.innerHTML = `
        <h2><i class="fas fa-eraser"></i> Remove Background</h2>
        <p style="color:#8b7ab8;font-size:13px;margin-bottom:12px;">Masukkan URL atau upload gambar.</p>
        <input type="text" id="removebgUrl" class="v-input" placeholder="URL Gambar (opsional)">
        <input type="file" id="removebgFile" accept="image/*" style="display:none">
        <label for="removebgFile" style="display:flex;justify-content:center;align-items:center;gap:8px;width:100%;padding:12px;margin:10px 0;background:rgba(168,85,247,0.04);border:1px solid rgba(168,85,247,0.06);border-radius:14px;cursor:pointer;font-size:13px;color:#8b7ab8;">
            <i class="fas fa-upload"></i> <span id="uploadText">Pilih Gambar</span>
        </label>
        <div id="fileName" style="text-align:center;color:#6a5a8a;font-size:12px;margin-bottom:12px;">Belum ada file</div>
        <button class="v-btn" id="removebgBtn"><i class="fas fa-magic"></i> Remove BG</button>
        <div id="removebgResult"></div>
    `;
    Const fileInput = document.getElementById('removebgFile');
    FileInput.onchange = () => {
        Const file = fileInput.files[0];
        Document.getElementById('uploadText').textContent = file ? 'Ganti Gambar' : 'Pilih Gambar';
        Document.getElementById('fileName').textContent = file ? file.name : 'Belum ada file';
    };
    Document.getElementById('removebgBtn').onclick = async () => {
        Const url = document.getElementById('removebgUrl').value.trim();
        Const file = fileInput.files[0];
        Const result = document.getElementById('removebgResult');
        If (!url && !file) return alert('Masukkan URL atau upload gambar!');
        Result.innerHTML = `<div class="result-box"><i class="fas fa-spinner spin"></i><br>Memproses...</div>`;
        Try {
            Let img;
            If (url) img = 'https://api-nanzz.my.id/docs/api/tools/image/removebg.php?url=' + encodeURIComponent(url);
            Else { const form = new FormData(); form.append('file', file); const res = await fetch('https://api-nanzz.my.id/docs/api/tools/image/removebg.php', { method: 'POST', body: form }); const blob = await res.blob(); img = URL.createObjectURL(blob); }
            Result.innerHTML = `
                <div class="result-box">
                    <img src="${img}" style="width:100%;border-radius:8px;margin-bottom:12px;">
                    <a href="${img}" download="removebg.png" style="text-decoration:none;">
                        <button class="v-btn" style="background:rgba(168,85,247,0.12);">Download PNG</button>
                    </a>
                </div>
            `;
        } catch { result.innerHTML = `<div class="result-box">Gagal memproses gambar.</div>`; }
    };
}

Function renderEnhancer(body) {
    Body.innerHTML = `
        <h2><i class="fas fa-magic"></i> Image Enhancer</h2>
        <p style="color:#8b7ab8;font-size:13px;margin-bottom:12px;">Masukkan URL atau upload gambar.</p>
        <input type="text" id="enhancerUrl" class="v-input" placeholder="URL Gambar (opsional)">
        <input type="file" id="enhancerFile" accept="image/*" style="display:none">
        <label for="enhancerFile" style="display:flex;justify-content:center;align-items:center;gap:8px;width:100%;padding:12px;margin:10px 0;background:rgba(168,85,247,0.04);border:1px solid rgba(168,85,247,0.06);border-radius:14px;cursor:pointer;font-size:13px;color:#8b7ab8;">
            <i class="fas fa-upload"></i> <span id="enhancerUploadText">Pilih Gambar</span>
        </label>
        <div id="enhancerFileName" style="text-align:center;color:#6a5a8a;font-size:12px;margin-bottom:12px;">Belum ada file</div>
        <button class="v-btn" id="enhancerBtn"><i class="fas fa-magic"></i> Enhance</button>
        <div id="enhancerResult"></div>
    `;
    Const fileInput = document.getElementById('enhancerFile');
    FileInput.onchange = () => {
        Const file = fileInput.files[0];
        Document.getElementById('enhancerUploadText').textContent = file ? 'Ganti Gambar' : 'Pilih Gambar';
        Document.getElementById('enhancerFileName').textContent = file ? file.name : 'Belum ada file';
    };
    Document.getElementById('enhancerBtn').onclick = async () => {
        Const url = document.getElementById('enhancerUrl').value.trim();
        Const file = fileInput.files[0];
        Const result = document.getElementById('enhancerResult');
        If (!url && !file) return alert('Masukkan URL atau upload gambar!');
        Result.innerHTML = `<div class="result-box"><i class="fas fa-spinner spin"></i><br>Memproses...</div>`;
        Try {
            Let img;
            If (url) img = 'https://api-nanzz.my.id/docs/api/tools/image/enhancer.php?url=' + encodeURIComponent(url);
            Else { const form = new FormData(); form.append('file', file); const res = await fetch('https://api-nanzz.my.id/docs/api/tools/image/enhancer.php', { method: 'POST', body: form }); const blob = await res.blob(); img = URL.createObjectURL(blob); }
            Result.innerHTML = `
                <div class="result-box">
                    <img src="${img}" style="width:100%;border-radius:8px;margin-bottom:12px;">
                    <a href="${img}" download="enhanced-image.png" style="text-decoration:none;">
                        <button class="v-btn" style="background:rgba(168,85,247,0.12);">Download HD</button>
                    </a>
                </div>
            `;
        } catch { result.innerHTML = `<div class="result-box">Gagal meningkatkan kualitas gambar.</div>`; }
    };
}

RenderAll();
