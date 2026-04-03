const problemsDB = {
    'system-running-slow': {
        title: 'System Running Slow',
        summary: 'Identify high resource usage, clean temporary files, trim startups, check RAM, scan for malware.',
        description: 'A slow Windows PC is one of the most common problems users face. Over time, your computer can slow down because too many programs run in the background, your hard drive is nearly full, software is outdated, or malware is quietly running. The good news is that most cases can be fixed for free — just follow the steps below in order.',
        causes: [
            'Too many programs starting automatically when Windows boots',
            'Hard drive is almost full — less than 10% free space available',
            'Malware or a virus running silently in the background',
            'Not enough RAM for the tasks you are running',
            'Outdated Windows or device drivers',
            'Fragmented or failing hard disk drive (HDD)',
        ],
        tips: [
            'Restart your PC at least once a week — it clears memory and installs pending updates.',
            'Keep at least 15% of your hard drive free. Use Settings → Storage → Cleanup Recommendations.',
            'Upgrading from an HDD to an SSD is the single biggest performance improvement you can make.',
            'Use the built-in Optimize Drives tool (Defrag for HDDs, TRIM for SSDs) once a month.',
        ],
        technicianNote: 'If the computer is still very slow after all steps, it may have failing hardware — especially the hard drive or RAM. A technician can run diagnostic tools (CrystalDiskInfo for drives and MemTest86 for RAM) to identify faulty parts that need replacement.',
        category: 'performance', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Inspect resource usage:</strong> Open Task Manager (Ctrl+Shift+Esc) → Performance tab. Check CPU, Memory, and Disk usage graphs.', img: 'assets/img/slow-pc/taskmanager.png', alt: 'Task Manager Performance Tab' },
            { text: '<strong>Identify resource hogs:</strong> Switch to the "Processes" tab. Click the "CPU" or "Memory" column headers to sort by usage. End non-critical high-usage processes.', img: 'assets/img/slow-pc/Cpuusage.png', alt: 'Task Manager High CPU Usage' },
            { text: '<strong>Clear temporary files:</strong> Press Start, type "Disk Cleanup", and open it. Select drive C: and click OK. Check "Temporary files", "Thumbnails", and "Recycle Bin", then click "Clean up system files".', img: 'assets/img/slow-pc/disk-cleanup.png', alt: 'Disk Cleanup Utility' },
            { text: '<strong>Reduce startup apps:</strong> In Task Manager, go to the "Startup" tab. Right-click non-essential apps (like game launchers or updaters) and select "Disable".', img: 'assets/img/slow-pc/startup.png', alt: 'Task Manager Startup Tab' },
            { text: '<strong>Check memory headroom:</strong> If your Memory usage stays above 80% even with few apps open, you may need to upgrade your RAM. <span class="screenshot-hint">📷 Suggestion: Photo of a RAM stick or the "Memory" slot info in Task Manager.</span>' },
            { text: '<strong>Scan for malware:</strong> Open Windows Security → Virus & threat protection → Quick scan. For a deeper check, choose "Scan options" → "Full scan".' }
        ]
    },
    'wifi-drop': {
        title: 'Wi\u2011Fi Keeps Disconnecting',
        summary: 'Stabilize Wi\u2011Fi by adjusting power settings, drivers, network reset, and DNS.',
        description: 'Your Wi-Fi keeps dropping or disconnecting every few minutes. This is frustrating, especially during video calls or online gaming. The problem can be in your laptop\'s Wi-Fi adapter, your router, or the Windows network settings. This guide helps you find and fix the exact cause step by step.',
        causes: [
            'Windows is turning off the Wi-Fi adapter to save power',
            'Outdated or corrupt Wi-Fi driver',
            'Wireless channel congestion from nearby networks using the same channel',
            'Incorrect DNS server settings causing connection drops',
            'Router firmware is outdated or the router needs a restart',
            'Physical obstacles or too much distance between device and router',
        ],
        tips: [
            'Place your router in an open, central location — not inside a cupboard or behind a TV.',
            'Switch your router to the 5 GHz band for a faster, more stable signal if your device supports it.',
            'Restart your router by unplugging it for 30 seconds at least once a month.',
            'Avoid placing your router near microwaves, cordless phones, or baby monitors — they cause Wi-Fi interference.',
        ],
        technicianNote: 'If disconnections still happen after all steps, and multiple devices experience the same issue, your router may be failing or your ISP has a line fault. Contact your ISP first, then consider replacing the router if it is more than 5 years old.',
        category: 'network', difficulty: 'Medium', os: ['Windows', 'Linux', 'macOS'],

        steps: [
            { text: '<strong>Disable power saving:</strong> Right-click Start → Device Manager. Expand "Network adapters". Right-click your Wi-Fi adapter → Properties. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager with Network adapters expanded.</span>' },
            { text: '<strong>Adjust Power Management:</strong> Go to the "Power Management" tab. Uncheck "Allow the computer to turn off this device to save power". Click OK and restart your PC. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Power Management tab with the box unchecked.</span>' },
            { text: '<strong>Update the Wi‑Fi driver:</strong> In Device Manager, right-click your Wi-Fi adapter again → Update driver → "Search automatically for drivers".' },
            { text: '<strong>Reset network stack:</strong> Settings → Network & Internet → Advanced network settings → Network reset → Reset now. This helps clear corrupt settings. <span class="screenshot-hint">📷 Suggestion: Screenshot of the "Network reset" settings page.</span>' },
            { text: '<strong>Set reliable DNS:</strong> Open Control Panel → Network and Sharing Center → Change adapter settings. Right-click Wi-Fi → Properties → Internet Protocol Version 4 (TCP/IPv4). select "Use the following DNS server addresses" and enter 8.8.8.8 and 8.8.4.4. <span class="screenshot-hint">📷 Suggestion: Screenshot of the IPv4 properties window with DNS filled in.</span>' }
        ]
    },
    'pc-wont-turn-on': {
        title: 'PC Won’t Turn On',
        summary: 'Verify power, test adapters/outlets, drain power, reseat components, and isolate faults.',
        description: "You press the power button on your PC or laptop and nothing happens — no lights, no fan sound, no screen. Do not panic. This is often caused by something simple like a loose cable. Work through these steps from easiest to most advanced before assuming a major hardware failure.",
        causes: [
            "Power cable is loose or the wall socket has tripped",
            "The PSU switch at back of PC accidentally turned off",
            "Residual electricity in capacitors preventing a fresh start",
            "A RAM stick has come loose from its slot",
            "The power supply unit (PSU) has completely failed",
        ],
        tips: [
            "Always use a surge protector to protect your PC from power spikes.",
            "A single short beep at startup means the motherboard is alive — the problem is elsewhere.",
            "A burning smell near the PSU vent means it has failed and needs immediate replacement.",
        ],
        technicianNote: "If the PC shows no signs of life after all steps, the PSU or motherboard has likely failed. Do not attempt to repair a PSU yourself — it stores dangerous voltage even when unplugged. A technician can safely test with a multimeter or known-good replacement PSU.",
        category: 'hardware', difficulty: 'Medium', os: ['Windows', 'Linux', 'macOS'],
        steps: [
            { text: '<strong>Verify power source:</strong> Ensure the power cable is firmly plugged into both the wall outlet and the PC PSU. Try a different outlet to rule out wall power issues.' },
            { text: '<strong>Check PSU Switch:</strong> Look at the back of your PC power supply. Ensure the toggle switch is set to "I" (On) and not "O" (Off). <span class="screenshot-hint">📷 Suggestion: Photo of the PSU switch on the back of a case.</span>' },
            { text: '<strong>Test Power Button:</strong> If nothing happens when you press the power button, the button itself might be faulty. On a desktop, you can try shorting the power switch pins on the motherboard (advanced users only).' },
            { text: '<strong>Drain residual power:</strong> Unplug the power cord. Hold down the power button for 30 seconds to discharge capacitors. Plug back in and try again.' },
            { text: '<strong>Reseat RAM:</strong> Unplug the PC, open the case, and remove the RAM sticks. Push them back in firmly until they click. <span class="screenshot-hint">📷 Suggestion: Photo of someone inserting a RAM stick.</span>' }
        ]
    },
    'black-screen-no-display': {
        title: 'Black Screen or No Display',
        summary: 'Check power and cables, test external display, safe mode/driver fix, reseat RAM/GPU, and BIOS settings.',
        description: "Your computer turns on (fans spin, lights glow) but the screen stays completely black or the monitor says \"No Signal\". The computer is running — the problem is with the video output. This is usually a cable, monitor input, or GPU driver issue — not a dead computer.",
        causes: [
            "HDMI or DisplayPort cable is not firmly connected",
            "Monitor is set to the wrong input source (e.g., HDMI 1 vs HDMI 2)",
            "GPU driver crashed or was corrupted after a Windows Update",
            "PC is outputting video to a second monitor that is not connected",
            "RAM or GPU not properly seated in the motherboard slot",
        ],
        tips: [
            "Press Win + P to cycle display modes — the output may be accidentally set to \"Projector only\".",
            "If you have a dedicated GPU (graphics card), try plugging the monitor into the motherboard port instead to test.",
            "Three short beeps at startup indicate a RAM error — reseat the RAM sticks.",
        ],
        technicianNote: "If the screen is black even in Safe Mode and when connected to a different monitor, the GPU may be failing. A technician can quickly confirm this by testing with a known-working GPU.",
        category: 'hardware', difficulty: 'Medium', os: ['Windows', 'Linux', 'macOS'],
        steps: [
            { text: '<strong>Check cabling:</strong> Ensure HDMI/DisplayPort cables are securely connected to the graphics card (not the motherboard, if you have a GPU) and the monitor.' },
            { text: '<strong>Test the monitor:</strong> Verify the monitor is powered on (look for a standby light). Press the Menu button on the monitor to see if the OSD appears. <span class="screenshot-hint">📷 Suggestion: Photo of a monitor power light or OSD menu.</span>' },
            { text: '<strong>Listen for boot sounds:</strong> If you hear Windows startup sounds but see nothing, the PC is booming but the display is failing.' },
            { text: '<strong>Try Safe Mode:</strong> reboot and interrupt startup 3 times to trigger Recovery Environment, then choose Startup Settings → Safe Mode. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Windows Recovery "Startup Settings" screen.</span>' }
        ]
    },
    'overheating-issue': {
        title: 'Overheating Issue',
        summary: 'Improve airflow, remove dust, monitor temps, refresh thermal paste, and optimize power.',
        description: "Your computer gets very hot during normal use, the fan runs at full speed all the time, or the system shuts down unexpectedly. Temperatures above 90°C on the CPU are dangerous. Overheating reduces performance (called thermal throttling) and shortens the lifespan of your components.",
        causes: [
            "Dust clogging the CPU cooler, GPU fans, or exhaust vents",
            "Thermal paste between CPU and cooler has dried out — common after 4+ years",
            "A case fan has completely stopped spinning",
            "Computer placed in an enclosed space with poor or no airflow",
            "Heavy load like gaming or video rendering pushing components to their limit",
        ],
        tips: [
            "Clean your PC of dust every 6 months using compressed air.",
            "A safe CPU temperature during normal use is 40–70°C. Under heavy load, below 85°C is acceptable.",
            "For laptops, never use on beds or pillows — always a hard flat surface. A laptop cooling pad reduces temperatures significantly.",
        ],
        technicianNote: "If temperatures consistently exceed 90°C after cleaning and applying fresh thermal paste, the CPU cooler may be inadequate for your processor or be failing. A technician can replace the cooler with a more powerful model suited to your CPU wattage.",
        category: 'hardware', difficulty: 'Medium', os: ['Windows', 'Linux', 'macOS'],
        steps: [
            { text: '<strong>Check for dust:</strong> Power off and open your case. Look for dust buildup on fans and heat sinks. Use compressed air to clean them. <span class="screenshot-hint">📷 Suggestion: Photo of a dusty fan vs. a clean fan.</span>' },
            { text: '<strong>Monitor Temperatures:</strong> Download HWMonitor or Core Temp. Run a game or heavy app and check if CPU/GPU temps exceed 85°C. <span class="screenshot-hint">📷 Suggestion: Screenshot of HWMonitor showing temperature readings.</span>' },
            { text: '<strong>Check Fan Operation:</strong> With the case open (carefully), power on and visually confirm all fans are spinning.' },
            { text: '<strong>Repaste CPU:</strong> If the PC is old, the thermal paste may have dried out. Remove the cooler, clean the old paste with alcohol, and apply a pea-sized drop of new paste. <span class="screenshot-hint">📷 Suggestion: Photo showing the correct amount of thermal paste on a CPU.</span>' }
        ]
    },
    'battery-not-charging': {
        title: 'Battery Not Charging',
        summary: 'Check power/charger, reset power, update drivers, and evaluate battery health.',
        description: "Your laptop is plugged in but the battery percentage is not going up, or Windows shows \"Plugged in, not charging\". This is very common and can range from a simple driver fix to a battery that needs physical replacement. Follow these steps to find the exact cause.",
        causes: [
            "Charging cable or power adapter is damaged or underpowered",
            "Dust or lint inside the charging port preventing good contact",
            "Battery driver has become corrupt and needs reinstalling",
            "Battery has reached end of lifespan (usually 500–1000 charge cycles)",
            "Battery charge threshold setting limits charging to 80% (common on Lenovo and Dell)",
        ],
        tips: [
            "Check your manufacturer's app (Lenovo Vantage, Dell Power Manager, ASUS Battery Health Charging) for charge threshold settings.",
            "Run \"powercfg /batteryreport\" in Admin Command Prompt to see your battery health history and capacity over time.",
            "Avoid leaving the laptop plugged in at 100% all the time — this degrades the battery faster.",
        ],
        technicianNote: "If the battery report shows \"Full Charge Capacity\" is below 50% of \"Design Capacity\", the battery is worn out and needs physical replacement. On many modern laptops the battery is glued in — always use a certified technician to avoid voiding your warranty or damaging the device.",
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Inspect the charging port:</strong> Check for dust or debris in the laptop charging port or the cable connector. <span class="screenshot-hint">📷 Suggestion: Close-up photo of a laptop charging port.</span>' },
            { text: '<strong>Generate Battery Report:</strong> Open Command Prompt as Admin. Type `powercfg /batteryreport` and press Enter. Open the generated HTML file. <span class="screenshot-hint">📷 Suggestion: Screenshot of the command prompt executing the command.</span>' },
            { text: '<strong>Analyze Report:</strong> Look at "Design Capacity" vs "Full Charge Capacity". If full charge is <50% of design, the battery is degraded. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Battery Report HTML file emphasizing capacity.</span>' },
            { text: '<strong>Reinstall Battery Driver:</strong> Device Manager → Batteries. Right-click "Microsoft ACPI-Compliant Control Method Battery" → Uninstall. Restart the laptop to reinstall it.' }
        ]
    },
    'application-crashes': {
        title: 'Application Crashes',
        summary: 'Update or reinstall, verify compatibility, check antivirus, and apply OS updates.',
        description: "An application closes without warning, freezes and becomes unresponsive, or shows an error every time you open it. Application crashes are usually caused by corrupt installation files, missing software dependencies, or permission issues. Most can be fixed without reinstalling Windows.",
        causes: [
            "Application installation files are corrupt",
            "A required library (Visual C++, .NET Framework, DirectX) is missing or outdated",
            "The app needs Administrator permissions to run correctly",
            "The app is not compatible with your version of Windows",
            "Antivirus is blocking a file the app needs",
        ],
        tips: [
            "Always download software from the official website — third-party sites often include modified files.",
            "If the app crashes only when saving to a specific folder, the problem may be file permissions, not the app itself.",
            "Check the developer's official support page or forum — there may already be a fix published for your exact error.",
        ],
        technicianNote: "If an app crashes immediately on launch and reinstalling does not help, Windows system files may be corrupted. Run \"sfc /scannow\" in Administrator Command Prompt. A technician can perform a Windows repair installation that fixes system files without deleting your personal data or programs.",
        category: 'software', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Event Viewer:</strong> Search for "Event Viewer" → Windows Logs → Application. Look for "Error" entries with a red icon at the time of the crash for clues. <span class="screenshot-hint">📷 Suggestion: Screenshot of Event Viewer highlighting an error log.</span>' },
            { text: '<strong>Run as Administrator:</strong> Right-click the application shortcut and select "Run as administrator". This fixes permission issues. <span class="screenshot-hint">📷 Suggestion: Context menu showing "Run as administrator".</span>' },
            { text: '<strong>Verify Game Files (Steam/Epic):</strong> If it is a game, use the launcher to "Verify Integrity of Game Files".' },
            { text: '<strong>Reinstall the App:</strong> Settings → Apps → Installed Apps. Find the app, click "... " → Uninstall. Then download the latest setup file and reinstall.' }
        ]
    },
    'wifi-not-connecting': {
        title: 'Wi‑Fi Not Connecting',
        summary: 'Confirm Wi‑Fi is enabled, refresh connection, run troubleshooters, update drivers, and reset TCP/IP.',
        description: "Windows shows your Wi-Fi network in the list but you cannot connect, or you connect and immediately disconnect. Sometimes the Wi-Fi icon itself is greyed out or missing. This guide covers all the fixes from the simplest (toggle Airplane Mode) to the most advanced (reset TCP/IP stack).",
        causes: [
            "Airplane Mode is accidentally turned on",
            "Saved Wi-Fi password is outdated after a router password change",
            "Corrupt network adapter driver",
            "Windows TCP/IP networking stack has become misconfigured",
            "Router is blocking your device due to MAC address filtering",
        ],
        tips: [
            "After changing your router's Wi-Fi password, always \"Forget\" the network on each device and reconnect fresh.",
            "Restarting the router (unplug 30 seconds, replug) fixes many mysterious connection errors.",
            "The command \"netsh winsock reset\" in Admin CMD can fix deeper network stack corruption — restart the PC after running it.",
        ],
        technicianNote: "If the Wi-Fi adapter is completely absent from Device Manager, or a persistent yellow error icon cannot be fixed by reinstalling the driver, the Wi-Fi chip may have failed. A technician can fit a USB Wi-Fi adapter as a cheap fix or replace the internal M.2 Wi-Fi card.",
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Check Airplane Mode:</strong> Click the network icon in the system tray. Ensure "Airplane mode" is OFF and Wi-Fi is ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Windows system tray network flyout.</span>' },
            { text: '<strong>Forget Network:</strong> Settings → Network & Internet → Wi-Fi → Manage known networks. Click "Forget" on your home network, then reconnect with the password.' },
            { text: '<strong>Run Troubleshooter:</strong> Settings → System → Troubleshoot → Other troubleshooters → Network Adapter → Run. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Troubleshooter list.</span>' },
            { text: '<strong>Flush DNS:</strong> Open Command Prompt (Admin). Type `ipconfig /flushdns` and press Enter.' }
        ]
    },
    'no-sound': {
        title: 'No Sound from Speakers',
        summary: 'Verify volume/output device, update drivers, restart audio services, and test peripherals.',
        description: "Your computer has no sound — videos play silently, music apps are open but you hear nothing from speakers or headphones. This is one of the most common Windows problems and is almost always a software issue: wrong audio output device, muted mixer, or a stopped service. Physical speaker failure is rare.",
        causes: [
            "Wrong playback device selected — audio going to HDMI monitor instead of speakers",
            "The specific app is muted or at zero in the Volume Mixer",
            "Physical speaker or headphone cable is unplugged",
            "Windows Audio service has stopped running",
            "Audio driver was corrupted by a Windows Update",
        ],
        tips: [
            "Right-click the speaker icon and open \"Sound settings\" to verify the correct Output device is selected.",
            "Check the physical volume knob on external speakers — it is easy to accidentally turn to zero.",
            "After a Windows Update breaks sound, try rolling back the audio driver in Device Manager → Sound, video and game controllers.",
        ],
        technicianNote: "If you hear crackling, static, or distorted audio instead of silence, the physical speakers or the audio chip on the motherboard may be damaged. A technician can test with a USB audio adapter to confirm whether the issue is software (fixable) or hardware (needs replacement).",
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Output Device:</strong> Click the speaker icon in the taskbar. Click the arrow/name to expand the list. Select the correct device (e.g., "Speakers (Realtek Audio)"). <span class="screenshot-hint">📷 Suggestion: Screenshot of the sound output selector in the taskbar.</span>' },
            { text: '<strong>Check Volume Mixer:</strong> Right-click the speaker icon → Open Volume mixer. Ensure your specific app is not muted or set to 0. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Volume Mixer window.</span>' },
            { text: '<strong>Restart Audio Service:</strong> Press Win+R, type `services.msc`. Find "Windows Audio", right-click it, and select "Restart".' }
        ]
    },
    'usb-ports-not-working': {
        title: 'USB Ports Not Working',
        summary: 'Test multiple devices/ports, reset controllers, adjust power settings, and verify BIOS.',
        description: "Plugging in a USB device produces no response — no connection sound, the device gets no power, and it does not appear in File Explorer. This can affect a single port or all ports at once. Follow this guide before assuming the ports are physically broken, as software fixes work in most cases.",
        causes: [
            "Windows is powering off USB ports to save energy (Selective Suspend setting)",
            "USB controller driver has crashed or become corrupt",
            "Physical damage inside the port (bent pins)",
            "The USB device itself is faulty — test with a known-working device first",
        ],
        tips: [
            "Always safely eject USB drives before removing them to prevent file system corruption.",
            "Rear USB ports on desktop PCs connect directly to the motherboard and are more reliable than front panel ports.",
            "A self-powered USB hub helps if the motherboard is not providing enough power for all connected USB devices.",
        ],
        technicianNote: "If all USB ports fail completely and driver reinstalls do not help, the USB controller chip on the motherboard may be damaged. A technician can add a PCIe USB expansion card as a cost-effective solution without needing to replace the entire motherboard.",
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Uninstall Controllers:</strong> Device Manager → Universal Serial Bus controllers. Right-click "USB Root Hub" entries → Uninstall device. Restart PC to auto-reinstall. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager USB controllers section.</span>' },
            { text: '<strong>Disable Selective Suspend:</strong> Control Panel → Power Options → Change plan settings → Change advanced power settings. Expand "USB settings" and disable "USB selective suspend setting". <span class="screenshot-hint">📷 Suggestion: Screenshot of the Advanced Power Options dialog.</span>' }
        ]
    },
    'hard-drive-not-detected': {
        title: 'Hard Drive Not Detected',
        summary: 'Check BIOS detection, cabling, Disk Management, and run diagnostics.',
        description: "A storage drive is not showing in File Explorer, or your main Windows drive is missing and the computer will not boot. This sounds alarming, but in many cases the data is safe. The drive may just need its cable reseated, a drive letter assigned, or a BIOS setting changed. Act calmly and follow these steps in order.",
        causes: [
            "SATA data cable is loose or has failed",
            "Drive has no power cable connected",
            "No drive letter assigned in Windows Disk Management",
            "BIOS SATA port is disabled or set to wrong mode (IDE vs AHCI)",
            "The drive has physically failed",
        ],
        tips: [
            "Never shake, drop, or open a hard drive — this permanently damages the internal platters.",
            "Clicking or grinding sounds from the drive mean stop immediately and contact a data recovery service.",
            "In Disk Management (Win+X), many \"missing\" drives are actually visible but have no letter — right-click to assign one.",
        ],
        technicianNote: "If the drive does not appear in BIOS at all after reseating cables, it has either physically disconnected or failed. If it contains important data, do not attempt further DIY fixes — take it to a professional data recovery service immediately. DIY recovery attempts can permanently destroy recoverable data.",
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Check Disk Management:</strong> Press Win+X → Disk Management. Look for a drive labeled "Unallocated" or "Not Initialized". <span class="screenshot-hint">📷 Suggestion: Screenshot of Disk Management showing an unallocated disk.</span>' },
            { text: '<strong>Assign Drive Letter:</strong> If the disk is there but has no letter, right-click the partition → "Change Drive Letter and Paths" → Add → Assign (e.g., D:). <span class="screenshot-hint">📷 Suggestion: Context menu in Disk Management.</span>' },
            { text: '<strong>Check BIOS:</strong> Restart and enter BIOS (Del/F2). Navigate to "SATA Configuration" or "Storage". Ensure the port is enabled.' }
        ]
    },
    'forgot-windows-password': {
        title: 'Forgot Windows Password',
        summary: 'Use recovery options, installation media, or account tools.',
        description: "You have forgotten your Windows login password and cannot access your computer. If you sign in with a Microsoft Account (your email), this is easy to fix online from any device. If you use a local account with no email attached, it requires more advanced steps using a Windows USB installation drive.",
        causes: [
            "Password was changed recently and the new one was forgotten",
            "Someone else configured the computer and did not provide the password",
            "Keyboard layout changed — special characters in passwords can appear differently",
        ],
        tips: [
            "Check Caps Lock is off — Windows passwords are case-sensitive.",
            "Try your Microsoft account (Outlook/Hotmail/Live) password at login.live.com on your phone first.",
            "After recovery, set up a PIN or Windows Hello fingerprint/face recognition so you do not need to remember a complex password.",
        ],
        technicianNote: "If you are not comfortable with command prompt operations, take the computer to a technician. Resetting a local Windows account password is a quick, standard service that can be done without losing any files or installed programs.",
        category: 'software', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Online Reset (Microsoft Account):</strong> Visit `account.live.com/password/reset` on your phone, reset your password, then connect your PC to the internet to sync.' },
            { text: '<strong>Sticky Keys Hack (Advanced):</strong> Boot from Windows USB Installer → Repair → Troubleshoot → Command Prompt. Replace sethc.exe with cmd.exe to get admin access at login screen. <span class="screenshot-hint">📷 Suggestion: Photo of the login screen with a Command Prompt window open.</span>' }
        ]
    },
    'graphics-driver-not-working': {
        title: 'Graphics Driver Not Working',
        summary: 'Clean install the latest vendor driver.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Use DDU (Display Driver Uninstaller):</strong> Download DDU. Boot into Safe Mode. Run DDU and select "Clean and restart". This is more thorough than standard uninstall. <span class="screenshot-hint">📷 Suggestion: Screenshot of the DDU interface.</span>' },
            { text: '<strong>Install Fresh Driver:</strong> Download `GeForce Experience` (Nvidia) or `Adrenalin` (AMD). Run the installer and select "Custom Install" → "Perform a clean installation".' }
        ]
    },
    'windows-update-failing': {
        title: 'Windows Update Failing',
        summary: 'Run troubleshooters, reset update components, repair system files.',
        description: "Windows Updates fail to install, get stuck at a percentage, show error codes, or keep undoing themselves on every restart. This is frustrating but usually fixable without reinstalling Windows. The most common cause is a corrupted update cache that just needs to be cleared and rebuilt.",
        causes: [
            "Windows Update cache folder (SoftwareDistribution) is corrupt",
            "Windows Update background services have stopped running",
            "Not enough free disk space on the C: drive for the update",
            "Third-party antivirus is blocking the update process",
            "System date and time are incorrect causing certificate verification errors",
        ],
        tips: [
            "Keep at least 10 GB free on your C: drive before running major updates.",
            "If a specific error code appears (e.g., 0x80070002), search it on Microsoft Support for a precise fix.",
            "Temporarily disable third-party antivirus while installing large feature updates like Windows 11 upgrades.",
        ],
        technicianNote: "If DISM and SFC both report errors they cannot fix, the Windows installation itself is too corrupted for repair tools. A technician can perform a Windows in-place upgrade (a repair install) that restores system files while keeping all your personal files, settings, and installed applications intact.",
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Run Troubleshooter:</strong> Settings → Update & Security → Troubleshoot → Additional troubleshooters → Windows Update → Run. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Windows Update troubleshooter running.</span>' },
            { text: '<strong>Manual Service Reset:</strong> Open CMD as Admin. Run `net stop wuauserv`, `net stop bits`. Then delete content in `C:\\Windows\\SoftwareDistribution`. Run `net start wuauserv`. <span class="screenshot-hint">📷 Suggestion: Screenshot of CMD executing the net stop commands.</span>' }
        ]
    },
    'data-loss': {
        title: 'Data Loss',
        summary: 'Check Recycle Bin, restore from backups, use recovery tools.',
        description: "Important files, photos, or documents have been accidentally deleted and have disappeared. Do not panic. In most cases deleted files are recoverable as long as you act quickly and stop saving new files to the same drive. Work through these steps from easiest to most advanced.",
        causes: [
            "Files deleted with Shift+Delete bypassing the Recycle Bin",
            "A drive was accidentally formatted",
            "Malware or ransomware encrypted or deleted files",
            "Hard drive failure made files inaccessible",
            "Power outage during a file save corrupted data",
        ],
        tips: [
            "STOP using the computer immediately — every new file written reduces recovery chances.",
            "Check the Recycle Bin first — even \"permanently deleted\" files often appear there.",
            "Check Windows File History if it was enabled: Settings > Backup > More options > Restore files.",
            "Set up automatic backups to OneDrive or an external drive to prevent future data loss.",
        ],
        technicianNote: "If recovery software cannot find the files, or the drive makes clicking or scratching sounds, it has physically failed. Professional data recovery labs recover data from failed drives using clean-room techniques — this service starts from $300 but is the only remaining option for physically damaged drives.",
        category: 'data', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Stop Using the Drive:</strong> Immediately stop saving new files to the drive where data was lost to prevent overwriting.' },
            { text: '<strong>Recuva Scan:</strong> Download Recuva (free version). Select the drive and run a "Deep Scan". Select files to recover and save them to a DIFFERENT drive (e.g., USB stick). <span class="screenshot-hint">📷 Suggestion: Screenshot of Recuva showing recoverable files.</span>' }
        ]
    },
    'time-date-reset': {
        title: 'Time & Date Reset',
        summary: 'Replace the CMOS battery and check time sync.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Sync Time:</strong> Right-click the clock → Adjust date/time. Click "Sync now". <span class="screenshot-hint">📷 Suggestion: Screenshot of the "Sync now" button in Settings.</span>' },
            { text: '<strong>Check CMOS Battery:</strong> If it resets after every reboot, your motherboard battery (CR2032) is dead. Open the case and replace the silver coin battery. <span class="screenshot-hint">📷 Suggestion: Photo of a CR2032 battery on a motherboard.</span>' }
        ]
    },
    'bluetooth-not-working': {
        title: 'Bluetooth Not Working',
        summary: 'Enable Bluetooth, run troubleshooters, update drivers.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Quick Settings:</strong> Press Win+A. Ensure the Bluetooth toggle is highlighted (On). <span class="screenshot-hint">📷 Suggestion: Screenshot of the Windows Quick Settings panel.</span>' },
            { text: '<strong>Restart Bluetooth Service:</strong> `services.msc` → "Bluetooth Support Service" → Right-click → Restart. Set Startup type to "Automatic". <span class="screenshot-hint">📷 Suggestion: Screenshot of the Services window with Bluetooth service selected.</span>' }
        ]
    },
    'IP Address Configuration Issues': {
        title: 'IP Config Issues',
        summary: 'Release/renew IP, flush DNS, check DHCP.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Release/Renew IP:</strong> Open CMD (Admin). Type `ipconfig /release` (wait for disconnect), then `ipconfig /renew` (wait for new IP). <span class="screenshot-hint">📷 Suggestion: Screenshot of the ipconfig renew output.</span>' },
            { text: '<strong>Check DHCP:</strong> Network Connections → Right-click Ethernet/Wi-Fi → Properties → IPv4 → Properties. Ensure "Obtain an IP address automatically" is selected.' }
        ]
    },
    'cannot-access-websites': {
        title: 'Cannot Access Websites',
        summary: 'Clear cache, flush DNS, check hosts file.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Clear Browser Data:</strong> Press Ctrl+Shift+Delete in your browser. Select "Cached images and files" and "Cookies". Click "Clear data". <span class="screenshot-hint">📷 Suggestion: Screenshot of the browser "Clear browsing data" dialog.</span>' },
            { text: '<strong>Check Hosts File:</strong> Open Notepad as Admin. Open `C:\\Windows\\System32\\drivers\\etc\\hosts`. Ensure there are no lines below the comments that list websites you can\'t access. <span class="screenshot-hint">📷 Suggestion: Screenshot of a clean hosts file in Notepad.</span>' }
        ]
    },
    'wifi-keeps-disconnecting': {
        title: 'WiFi Disconnects',
        summary: 'Update drivers, disable power saving, reset network.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Power Saving:</strong> Device Manager → Network adapters → [Your Adapter] → Power Management. Uncheck "Allow the computer to turn off...".' },
            { text: '<strong>Change Channel (Router):</strong> Log into your router (usually 192.168.0.1). Change the Wi-Fi channel from "Auto" to 1, 6, or 11 to avoid interference. <span class="screenshot-hint">📷 Suggestion: Screenshot of a router admin page WiFi settings.</span>' }
        ]
    },
    'slow-internet-speed': {
        title: 'Slow Internet Speed',
        summary: 'Check speed, reboot router, update drivers.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Isolate the Problem:</strong> Connect via Ethernet cable. If speed is fast on cable but slow on Wi-Fi, it\'s a Wi-Fi interference or range issue.' },
            { text: '<strong>Check Background Downloads:</strong> Open Task Manager → Network tab. Sort by usage to see if Steam, Windows Update, or other apps are hogging bandwidth. <span class="screenshot-hint">📷 Suggestion: Screenshot of Task Manager Network column sorted high to low.</span>' }
        ]
    },
    'ethernet-port-not-working': {
        title: 'Ethernet Not Working',
        summary: 'Check cable, update driver, check IP config.',
        category: 'network', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Check Link Lights:</strong> Look at the Ethernet port on the PC and switch/router. Are the amber/green lights flashing? If dark, the cable or port is dead. <span class="screenshot-hint">📷 Suggestion: Photo of active Ethernet port lights.</span>' },
            { text: '<strong>Enable Adapter:</strong> Control Panel → Network Connections. If the Local Area Connection is "Disabled" (greyed out), right-click and select "Enable". <span class="screenshot-hint">📷 Suggestion: Screenshot of the Network Connections window.</span>' }
        ]
    },
    'bluetooth-device-not-detecting': {
        title: 'Bluetooth Not Detecting',
        summary: 'Re-pair device, check pairing mode, update driver.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Enter Pairing Mode:</strong> Most devices require holding a button for 5 seconds until a light flashes fast. Ensure it is flashing before searching on PC. <span class="screenshot-hint">📷 Suggestion: Photo of a device (e.g., headphones) in pairing mode.</span>' },
            { text: '<strong>Run Troubleshooter:</strong> Settings → Troubleshoot → Bluetooth.' }
        ]
    },
    'bluetooth-disconnects-frequently': {
        title: 'Bluetooth Disconnects',
        summary: 'Disable power saving, reduce interference.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Interference Check:</strong> USB 3.0 ports can interfere with Bluetooth. Move the Bluetooth dongle away from USB 3.0 ports using an extension cable. <span class="screenshot-hint">📷 Suggestion: Photo showing a USB extension cable setup.</span>' },
            { text: '<strong>Update Firmware:</strong> Update the firmware of your Bluetooth device (headset/mouse) using the manufacturer app.' }
        ]
    },
    'bluetooth-audio-not-working': {
        title: 'Bluetooth Audio Issues',
        summary: 'Set default output, check services.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Set as Default Service:</strong> Control Panel → Sound → Playback. Right-click your Bluetooth headphones and choose "Set as Default Device". <span class="screenshot-hint">📷 Suggestion: Screenshot of the Sound Control Panel.</span>' },
            { text: '<strong>Disable Hands-Free:</strong> In Sound settings, you might see two entries for headphones: "Stereo" and "Hands-Free AG Audio". Always select "Stereo" for music/games. "Hands-Free" is low quality for calls. <span class="screenshot-hint">📷 Suggestion: Screenshot comparing Stereo vs Hands-Free options.</span>' }
        ]
    },
    'windows-update-stuck': {
        title: 'Windows Update Stuck',
        summary: 'Troubleshoot stuck updates.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Wait it out:</strong> Sometimes "Getting things ready" takes 2+ hours. Only intervene if it has been stuck for >3 hours.' },
            { text: '<strong>Safe Mode Restart:</strong> Disconnect internet (unplug Ethernet/turn off Wi-Fi). Force restart. This often breaks the loop.' }
        ]
    },
    'update-error-0x80070002': {
        title: 'Update Error 0x80070002',
        summary: 'Check time, clear temp files.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Sync Time:</strong> Incorrect date/time causes SSL failures. Settings → Date & Time → Sync now.' },
            { text: '<strong>DISM Tool:</strong> CMD (Admin) → `DISM /Online /Cleanup-Image /RestoreHealth`. This fixes the update system itself. <span class="screenshot-hint">📷 Suggestion: Screenshot of DISM command running in CMD.</span>' }
        ]
    },
    'no-bootable-device': {
        title: 'No Bootable Device',
        summary: 'Check boot order, drive connections.',
        description: "When you start your PC the screen shows \"No Bootable Device\" or \"Boot Device Not Found\" instead of loading Windows. The computer cannot find the drive where Windows is installed. This is usually a changed BIOS boot order, a loose cable, or a corrupted Windows bootloader — and is often fixable without losing any data.",
        causes: [
            "BIOS boot order was changed so a USB drive is set to boot first",
            "SATA cable between the motherboard and the hard drive came loose",
            "The Windows bootloader has become corrupted after an update or power failure",
            "The NVMe SSD is not detected because UEFI settings changed",
            "The storage drive with Windows on it has physically failed",
        ],
        tips: [
            "Always check BIOS boot order first — most common cause and takes 2 minutes to verify.",
            "Press F9 in BIOS to restore default settings which re-enables all storage ports.",
            "If Startup Repair fails, boot into Command Prompt from a Windows USB and run: bootrec /rebuildbcd",
        ],
        technicianNote: "If the drive is not detected in BIOS at all after reseating cables, it has failed. If it IS detected but Windows will not boot, a technician can repair the bootloader quickly without any data loss — this is a common and fast service.",
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Check Boot Order:</strong> Reset BIOS settings to default (F9 usually). Ensure "Windows Boot Manager" is first. <span class="screenshot-hint">📷 Suggestion: Photo of BIOS Boot Order screen.</span>' },
            { text: '<strong>Reseat Drive:</strong> Power off. Unplug and replug the SATA data and power cables on the SSD/HDD. <span class="screenshot-hint">📷 Suggestion: Photo of SATA cables connected to a drive.</span>' }
        ]
    },
    'webcam-not-detected': {
        title: 'Webcam Not Detected',
        summary: 'Check permissions, drivers, and privacy switch.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Privacy Switch:</strong> Many modern laptops have a tiny physical slider over the lens or a keyboard switch (look for camera icon on F-keys). <span class="screenshot-hint">📷 Suggestion: Close-up photo of a laptop webcam privacy shutter.</span>' },
            { text: '<strong>Check App Permissions:</strong> Settings → Privacy → Camera. Ensure "Allow access to the camera on this device" is On. <span class="screenshot-hint">📷 Suggestion: Screenshot of Windows Camera Privacy settings.</span>' }
        ]
    },
    /* Mobile Problems */
    'iphone-battery-drain': {
        title: 'iPhone Battery Drain',
        summary: 'Check battery health, disable background refresh, update iOS.',
        description: "Your iPhone battery is dropping much faster than usual, even when not in heavy use. This is a common issue often triggered by background app activity, high brightness, or a recent software update. Understanding how your battery consumes power is the first step to fixing it.",
        causes: [
            "Heavy background app refresh activity",
            "Screen brightness set too high or \"Always On Display\" enabled",
            "Weak cellular signal forcing the phone to use more power searching for network",
            "Outdated apps or a buggy iOS version",
            "Location services (GPS) being used by too many apps in the background",
            "Chemical aging of the battery (Battery Health below 80%)",
        ],
        tips: [
            "Go to Settings > Battery to see exactly which apps are using the most power.",
            "Turn on \"Low Power Mode\" to temporarily extend battery life during the day.",
            "Disable \"Background App Refresh\" for apps that don't need real-time updates.",
            "Keep your iPhone away from extreme heat (e.g., inside a hot car) to prevent permanent battery damage.",
        ],
        technicianNote: "If your Battery Health (Settings > Battery > Battery Health) is 80% or lower, the battery needs a physical replacement. A professional technician can replace the battery in about 30-60 minutes, which will restore your phone's original performance and runtime.",
        category: 'battery', difficulty: 'Easy', os: ['iOS'],
        steps: [
            { text: '<strong>Check Battery Health:</strong> Settings → Battery → Battery Health & Charging. If "Maximum Capacity" is under 80%, consider replacement. <span class="screenshot-hint">📷 Suggestion: Screenshot of iPhone Battery Health screen.</span>' },
            { text: '<strong>Check Battery Usage:</strong> Settings → Battery. Scroll down to see which apps use the most power. <span class="screenshot-hint">📷 Suggestion: Screenshot of app battery usage list.</span>' },
            { text: '<strong>Disable Background Refresh:</strong> Settings → General → Background App Refresh → Turn off for non-essential apps.' }
        ]
    },
    'android-app-crash': {
        title: 'Android App Keep Crashing',
        summary: 'Clear cache, update app/WebView, reinstall.',
        description: "Apps on your Android device are closing unexpectedly, freezing, or showing an \"App has stopped\" error. This can happen due to low memory, corrupted cache files, or a mismatch between the app version and your Android system software.",
        causes: [
            "The app cache or data folder has become corrupted",
            "Your device is almost out of internal storage space",
            "The app is outdated and no longer compatible with your Android version",
            "Insufficient RAM available (too many heavy apps open at once)",
            "The Android System Webview component is outdated",
        ],
        tips: [
            "Try \"Force Stop\" and \"Clear Cache\" in the app settings before uninstalling.",
            "Keep your phone restarted at least once a week to clear temporary system memory.",
            "Ensure you have at least 15% of your storage free for apps to run smoothly.",
            "Check the Play Store for updates to \"Android System Webview\" — it frequently fixes app crashes.",
        ],
        technicianNote: "If multiple apps crash across the entire system even after a Factory Reset, the internal storage chip (eMMC/UFS) may be failing. This usually requires a motherboard diagnostic or replacement by a certified technician.",
        category: 'app', difficulty: 'Easy', os: ['Android'],
        steps: [
            { text: '<strong>Clear App Cache:</strong> Settings → Apps → Select App → Storage & cache → Clear cache. <span class="screenshot-hint">📷 Suggestion: Screenshot of App Info storage screen.</span>' },
            { text: '<strong>Update WebView:</strong> Open Play Store → Manage apps & device. Update "Android System WebView" and "Chrome".' },
            { text: '<strong>Reinstall App:</strong> Uninstall the app and download it again from the Play Store.' }
        ]
    },
    'mobile-data-not-working': {
        title: 'Mobile Data Not Working',
        summary: 'Toggle Airplane mode, check APN, reset network settings.',
        description: "You see signal bars but cannot access the internet, or the 4G/5G/LTE icon is missing entirely. Mobile data issues can be caused by carrier settings, SIM card errors, or reaching your data limit for the month.",
        causes: [
            "Data roaming or cellular data is accidentally turned off",
            "Incorrect APN (Access Point Name) settings causing connection failure",
            "The SIM card is loose or damaged inside the tray",
            "You have reached your monthly data cap set by your carrier",
            "A temporary network outage in your area",
        ],
        tips: [
            "Toggle Airplane Mode on for 10 seconds and then off to force a network refresh.",
            "Check with your carrier if your account has been suspended or if you have run out of data balance.",
            "Try your SIM card in another phone to see if the issue is with the SIM or your device.",
            "Ensure \"Data Saver\" mode is turned off in settings.",
        ],
        technicianNote: "If your phone shows \"No Service\" or \"Invalid SIM\" consistently and a new SIM card doesn't fix it, the internal antenna or SIM reader slot may be damaged. A technician can replace the SIM module or repair the antenna connector.",
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Toggle Airplane Mode:</strong> Turn on Airplane mode for 10 seconds, then turn it off to reset the tower connection.' },
            { text: '<strong>Check Data Limit:</strong> Ensure you haven\'t reached your monthly data cap.' },
            { text: '<strong>Reset Network Settings:</strong> Settings → General/System → Reset → Reset Network Settings (Warning: clears Wi-Fi passwords). <span class="screenshot-hint">📷 Suggestion: Screenshot of the Reset Network Settings confirmation.</span>' }
        ]
    },
    'phone-wont-charge': {
        title: 'Phone Won’t Charge',
        summary: 'Clean port, change cable/adapter, force restart.',
        description: "You plug in your charger and nothing happens, or the charging is extremely slow and intermittent. This is high-impact but often fixable by simply cleaning the port or trying a different cable.",
        causes: [
            "Dust, lint, or debris stuck inside the charging port",
            "A broken or low-quality USB charging cable",
            "A faulty wall adapter or power socket",
            "Water damage or moisture detected in the port buffer",
            "The charging port pins are bent or broken",
        ],
        tips: [
            "Use a wooden toothpick or a can of compressed air to gently clean the charging port (Never use metal!)",
            "Always try a known-working cable and adapter (preferably original ones) before assuming the phone is broken.",
            "Avoid charging your phone on a bed or carpet — it needs ventilation to prevent overheating during high-speed charging.",
            "Check if wireless charging works (if supported) to rule out a total battery failure.",
        ],
        technicianNote: "If cleaning the port and using a new cable doesn't work, the charging flex cable is likely damaged. This is a common and relatively inexpensive repair that takes 30-45 minutes for a professional to replace.",
        category: 'battery', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Clean Charging Port:</strong> Use a wooden toothpick (gently!) or compressed air to remove pocket lint from the port. <span class="screenshot-hint">📷 Suggestion: Photo of cleaning a charging port.</span>' },
            { text: '<strong>Try Different Cable:</strong> Cables fail often. Test with a known working cable and brick.' },
            { text: '<strong>Force Restart:</strong> iPhone: Vol Up, Vol Down, Hold Power. Android: Hold Power + Vol Down for 10s.' }
        ]
    },
    'touchscreen-unresponsive': {
        title: 'Touchscreen Unresponsive',
        summary: 'Force restart, clean screen, remove protector, factory reset.',
        description: "The screen doesn't respond to your touches, or it triggers \"ghost touches\" (clicking things on its own). This can be caused by physical damage, or simply a software glitch that has frozen the touch interface.",
        causes: [
            "A low-quality or cracked screen protector interfering with touch",
            "The screen is dirty or has moisture/oil on the surface",
            "System software has frozen, making it look like a hardware issue",
            "The screen has suffered physical pressure or a drop",
            "A faulty app is taking up 100% of the processing power",
        ],
        tips: [
            "Perform a \"Force Restart\" using the side buttons to clear any software freezing.",
            "Thoroughly clean the screen with a microfiber cloth and remove any screen protectors.",
            "If you have a case, remove it — sometimes the edges of a tight case can press against the screen.",
            "Ensure your hands are dry and clean when using the touchscreen.",
        ],
        technicianNote: "If the screen is physically cracked or has black ink-like spots (bleeding LCD), it must be replaced. An unresponsive screen without visible damage often means the digitizer connector inside has come loose. A technician can reseat the connector or replace the display assembly.",
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Force Restart:</strong> This is the first step. See your device specific method to force reboot.' },
            { text: '<strong>Clean Screen:</strong> Wipe screen with microfiber cloth. Moisture or oil can cause phantom touches.' },
            { text: '<strong>Remove Screen Protector:</strong> If cracked or peeling, it might be interfering with touch sensitivity.' }
        ]
    },
    'wifi-connected-no-internet-mobile': {
        title: 'WiFi Connected But No Internet',
        summary: 'Forget network, reset router, check date/time.',
        description: "Your phone shows it is connected to Wi-Fi, but you get a \"No Internet Connection\" error. This means the connection between your phone and router is fine, but the router isn't getting data from the provider.",
        causes: [
            "The Wi-Fi router needs a restart or has lost internet from the ISP",
            "Incorrect DNS settings on your phone or router",
            "Your phone's IP address is conflicting with another device",
            "The Wi-Fi network requires a \"Sign In\" (Captive Portal) that hasn't popped up",
            "Date and Time settings are incorrect, causing security certificate errors",
        ],
        tips: [
            "Forget the Wi-Fi network and reconnect using the password again.",
            "Ensure your \"Date & Time\" is set correctly (use \"Set Automatically\").",
            "Open your browser and try to visit a simple site like google.com to trigger the sign-in page.",
            "Restart your router by unplugging it for 30 seconds.",
        ],
        technicianNote: "If your phone fails to connect to ANY Wi-Fi network while other devices work fine, the internal Wi-Fi/Bluetooth chip may be failing. A technician can perform a diagnostic and potentially replace the Wi-Fi module on the motherboard.",
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Forget Network:</strong> Settings → Wi-Fi → Tap "i" or Gear icon → Forget This Network. Reconnect.' },
            { text: '<strong>Check Date & Time:</strong> Ensure "Set Automatically" is ON. Incorrect time breaks SSL.' },
            { text: '<strong>Disable Private Address:</strong> (iOS) Settings → Wi-Fi → "i" → Toggle off "Private Wi-Fi Address" temporarily to test router compatibility.' }
        ]
    },
    'face-id-not-working': {
        title: 'Face ID Not Working',
        summary: 'Clean sensor, reset Face ID, check for updates.',
        description: "Face ID is not recognizing your face or the option is grayed out/unavailable in settings. This can be caused by physical obstructions, software glitches, or a hardware failure of the TrueDepth camera system.",
        causes: [
          "TrueDepth camera covered by dirt/case",
          "Screen protector interference",
          "Software glitch in Secure Enclave",
          "Physical sensor misalignment",
          "iOS update failure"
        ],
        tips: [
          "Clean the notch with microfiber",
          "Reset Face ID in good lighting",
          "Set up Alternate Appearance",
          "Ensure eyes/mouth are visible"
        ],
        technicianNote: "Face ID hardware is cryptographically linked to the motherboard. Only Apple can replace it while keeping functionality.",
        category: 'system', difficulty: 'Medium', os: ['iOS'],
        steps: [
            { text: '<strong>Clean Notch/island:</strong> Wipe the top of the screen. Smudges cover the IR sensor. <span class="screenshot-hint">📷 Suggestion: Photo indicating where sensors are.</span>' },
            { text: '<strong>Reset Face ID:</strong> Settings → Face ID & Passcode → Reset Face ID.' },
            { text: '<strong>Check Attention Settings:</strong> Ensure "Require Attention for Face ID" is enabled (or disabled if you prefer speed/have glasses issues).' }
        ]
    },
    'android-system-ui-stopped': {
        title: 'System UI Has Stopped',
        summary: 'Clear Google App cache, uninstall updates, factory reset.',
        description: "Your screen goes black, or navigation elements disappear with an error message. This is usually due to memory exhaustion or theme conflicts.",
        causes: [
          "Low available RAM",
          "Incompatible third-party launcher",
          "Corrupted Google Play Services",
          "Android System WebView bug"
        ],
        tips: [
          "Force restart immediately",
          "Uninstall custom themes/launchers",
          "Update Chrome/WebView"
        ],
        technicianNote: "Repeated UI crashes often require a factory reset. If it persists, internal storage (NAND) may be failing.",
        category: 'system', difficulty: 'Hard', os: ['Android'],
        steps: [
            { text: '<strong>Clear Google App Cache:</strong> Settings → Apps → Google → Storage → Clear Cache.' },
            { text: '<strong>Uninstall Updates:</strong> Settings → Apps → Google → 3-dots menu → Uninstall updates.' },
            { text: '<strong>Safe Mode:</strong> Boot into Safe Mode. If it stops, a 3rd party app is the cause.' }
        ]
    },
    'bluetooth-pairing-fails-mobile': {
        title: 'Bluetooth Pairing Fails',
        summary: 'Toggle Bluetooth, forget device, reset network settings.',
        description: "Your phone can't find new devices or repeatedly fails to connect to paired ones.",
        causes: [
          "Device already connected elsewhere",
          "Corrupted Bluetooth cache",
          "2.4GHz Wi-Fi interference",
          "Incorrect pairing mode"
        ],
        tips: [
          "Toggle Bluetooth for 10s",
          "Forget and re-pair device",
          "Move away from microwave/router",
          "Update device firmware"
        ],
        technicianNote: "Phones use a combined Wi-Fi/BT chip. If both fail, the internal module/antenna is likely damaged.",
        category: 'connectivity', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Toggle Bluetooth:</strong> Turn BT off, wait 5s, turn on.' },
            { text: '<strong>Forget Device:</strong> Settings → Bluetooth → "i" or Gear → Forget. Then re-pair.' },
            { text: '<strong>Reset Network Settings:</strong> Verify if other devices connect. If not, reset network settings.' }
        ]
    },
    'camera-black-screen-mobile': {
        title: 'Camera Black Screen',
        summary: 'Force close app, clear cache, restart phone, check permissions.',
        description: "Opening the camera shows a black preview. This might affect one or both cameras.",
        causes: [
          "Software loop freeze",
          "Resource conflict with other apps",
          "Loose ribbon cable from drop",
          "Sensor hardware failure"
        ],
        tips: [
          "Force stop all camera apps",
          "Test with a different app",
          "Switch between front/back lens",
          "Check for software updates"
        ],
        technicianNote: "If flash also fails, the back camera module is likely disconnected. It's a common hardware repair.",
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Force Close App:</strong> Swipe up and close the Camera app.' },
            { text: '<strong>Clear Cache (Android):</strong> Long press Camera icon → App Info → Storage → Clear Cache.' },
            { text: '<strong>Check flashlight:</strong> If flashlight toggle is greyed out, it’s a hardware failure or the camera is in use by another app.' }
        ]
    },
    'bsod-crash': {
        title: 'Blue Screen of Death (BSOD)',
        summary: 'Analyze stop code, update drivers, check RAM, scan for corruption.',
        description: "Your PC suddenly crashes with a blue screen showing an error code and a QR code — the dreaded Blue Screen of Death (BSOD). Windows restarts automatically. This means Windows hit a critical error it could not recover from. Most BSODs are caused by driver issues or faulty RAM — both fixable without reinstalling Windows.",
        causes: [
            "Outdated, corrupt, or incompatible driver — most commonly GPU or chipset drivers",
            "Faulty or incompatible RAM stick",
            "Corrupted Windows system files",
            "Overheating causing CPU or GPU to fail during load",
            "Recently installed hardware or software that is incompatible with your system",
        ],
        tips: [
            "Write down the STOP CODE shown on the blue screen (e.g., IRQL_NOT_LESS_OR_EQUAL) — searching it reveals the exact cause.",
            "The free tool \"WhoCrashed\" reads Windows crash dump files and identifies exactly which driver caused each BSOD.",
            "If the BSOD started after a Windows Update, go to Settings → Windows Update → Uninstall updates to roll it back.",
        ],
        technicianNote: "If BSODs happen multiple times per day with different stop codes, the RAM is almost certainly failing. A technician will run MemTest86 overnight to confirm. Faulty RAM cannot be repaired and must be replaced — fortunately RAM is relatively inexpensive.",
        category: 'software', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Note the Stop Code:</strong> Write down the error code (e.g., CRITICAL_PROCESS_DIED) at the bottom of the blue screen to identify the cause. <span class="screenshot-hint">📷 Suggestion: Photo of a monitor showing a Blue Screen of Death with the stop code highlighted.</span>' },
            { text: '<strong>Enter Safe Mode:</strong> If stuck in a loop, interrupt startup 3 times to enter Recovery Environment. Choose Startup Settings → Safe Mode. <span class="screenshot-hint">📷 Suggestion: Screenshot of the "Startup Settings" menu in Windows Recovery.</span>' },
            { text: '<strong>Update Drivers:</strong> Outdated drivers are a common cause. Device Manager → Update drivers for GPU and Chipset. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager with a device selected.</span>' },
            { text: '<strong>Run Memory Diagnostic:</strong> Search "Windows Memory Diagnostic" and restart to check for RAM errors. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Memory Diagnostic tool prompt.</span>' },
            { text: '<strong>SFC Scan:</strong> Open CMD (Admin) → `sfc /scannow`. Repairs corrupted system files. <span class="screenshot-hint">📷 Suggestion: Screenshot of Command Prompt finishing an SFC scan.</span>' }
        ]
    },
    'keyboard-not-working': {
        title: 'Keyboard Not Working',
        summary: 'Check connection, update driver, ease of access settings.',
        description: "Keys on your keyboard are not responding, the entire keyboard is dead, or some keys work but others do not. Keyboard problems in Windows are almost always a software issue — a driver reset or disabling an accessibility feature fixes it. Physical keyboard failures are much less common.",
        causes: [
            "USB connector is loose or not fully inserted into the port",
            "Wireless keyboard batteries are dead or the USB receiver is disconnected",
            "Keyboard driver has crashed and needs reinstalling",
            "Filter Keys accessibility feature is on, causing brief keystrokes to be ignored",
            "Physical liquid spill damage to the keyboard",
        ],
        tips: [
            "Try a different USB port first and check if the keyboard indicator lights turn on at all.",
            "The On-Screen Keyboard (search in Start menu) lets you type temporarily while you fix the physical keyboard.",
            "After a liquid spill, immediately turn off the PC and do not use the keyboard for 24+ hours — let it dry completely.",
        ],
        technicianNote: "If specific keys are physically stuck or unresponsive even after driver reinstall and cleaning, the keyboard mechanism itself has failed. For desktop external keyboards, replacement is inexpensive. For laptop keyboards, a technician can replace the keyboard module — the cost depends on the laptop model.",
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Connection:</strong> Unplug and replug the USB. Try a different port. If wireless, check batteries/charge. <span class="screenshot-hint">📷 Suggestion: Photo of USB-A plug or wireless dongle.</span>' },
            { text: '<strong>Reinstall Driver:</strong> Device Manager → Keyboards → Right-click device → Uninstall device. Restart PC. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager "Keyboards" section.</span>' },
            { text: '<strong>Filter Keys:</strong> Settings → Ease of Access → Keyboard. Ensure "Filter Keys" is OFF. It ignores brief or repeated strokes. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Ease of Access" keyboard settings.</span>' },
            { text: '<strong>Test On-Screen Keyboard:</strong> Open Start, type "On-Screen Keyboard". If this works, it\'s a hardware issue with your physical keyboard. <span class="screenshot-hint">📷 Suggestion: Screenshot of the On-Screen Keyboard app.</span>' }
        ]
    },
    'mouse-lagging': {
        title: 'Mouse Lagging or Freezing',
        summary: 'Check surface, battery, interference, pointer precision.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Check Surface:</strong> Ensure you are using a mousepad. Reflective glass tables cause skipping. <span class="screenshot-hint">📷 Suggestion: Photo of a mouse on a proper mousepad vs glass.</span>' },
            { text: '<strong>Wireless Interference:</strong> Move the USB receiver to a front port or use an extension cable away from USB 3.0 drives. <span class="screenshot-hint">📷 Suggestion: Photo of a USB extension cable moving the receiver away from the PC.</span>' },
            { text: '<strong>Pointer Precision:</strong> Control Panel → Mouse → Pointer Options. Uncheck "Enhance pointer precision" (acceleration) to test. <span class="screenshot-hint">📷 Suggestion: Screenshot of Mouse Properties "Pointer Options" tab.</span>' },
            { text: '<strong>Update Batteries:</strong> Low voltage causes sensor skipping. Replace AA/AAA batteries.' }
        ]
    },
    'printer-not-printing': {
        title: 'Printer Not Printing',
        summary: 'Clear spooler, check connection, set as default.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Clear Spooler:</strong> Services (`services.msc`) → Print Spooler → Restart. This clears stuck jobs. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Services" window showing Print Spooler.</span>' },
            { text: '<strong>Set as Default:</strong> Settings → Devices → Printers & Scanners. Select your printer → Manage → Set as default. <span class="screenshot-hint">📷 Suggestion: Screenshot of Printers & Scanners settings.</span>' },
            { text: '<strong>Check Connection:</strong> If Wi-Fi, ensure printer and PC are on the same network (2.4GHz vs 5GHz matters sometimes). <span class="screenshot-hint">📷 Suggestion: Photo of the printer\'s screen showing Wi-Fi status.</span>' },
            { text: '<strong>Run Troubleshooter:</strong> Settings → Troubleshoot → Printer. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Printer troubleshooter.</span>' }
        ]
    },
    'microphone-not-working': {
        title: 'Microphone Not Working',
        summary: 'Check privacy settings, default device, mute button.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Privacy Settings:</strong> Settings → Privacy → Microphone. "Allow apps to access your microphone" must be ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of Microphone Privacy settings.</span>' },
            { text: '<strong>Check Mute Button:</strong> Physical headsets often have a mute switch on the cord or earcup. Check if it\'s red/off. <span class="screenshot-hint">📷 Suggestion: Photo of an inline mute switch on a headset cable.</span>' },
            { text: '<strong>Set Default:</strong> Sound Settings → Input. Select the correct microphone from the dropdown. <span class="screenshot-hint">📷 Suggestion: Screenshot of Sound Settings "Input" section.</span>' },
            { text: '<strong>Test in Voice Recorder:</strong> Open Windows Voice Recorder and speak. <span class="screenshot-hint">📷 Suggestion: Screenshot of Voice Recorder showing audio waves.</span>' }
        ]
    },
    'screen-flickering': {
        title: 'Screen Flickering',
        summary: 'Check cables, refresh rate, update display driver.',
        description: "Your monitor screen flickers, blinks, or flashes rapidly — either the whole screen or within certain apps. Screen flickering is usually caused by a loose display cable, an incorrect refresh rate setting, or a crashing GPU driver. It rarely means the monitor itself is broken.",
        causes: [
            "A loose HDMI or DisplayPort cable — the most common cause",
            "Screen refresh rate is set incorrectly for your monitor model",
            "GPU driver is crashing and auto-recovering repeatedly",
            "A conflicting background app (antivirus, overlay software) causing issues",
            "The monitor or GPU is failing",
        ],
        tips: [
            "Quick test: does Task Manager itself flicker? If not — a specific app is the cause. If yes — it is a driver or hardware issue.",
            "Use a high-quality cable that matches your resolution and refresh rate specification.",
            "Try a different cable type (DisplayPort instead of HDMI) to quickly rule out a cable fault.",
        ],
        technicianNote: "If flickering continues after replacing the cable and reinstalling the GPU driver, and the issue appears on a different monitor too, the GPU is likely failing. If it only appears on your specific monitor, the monitor panel itself may be dying. A technician can test both components.",
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Check Cable:</strong> A loose HDMI/DisplayPort cable is the #1 cause. Unplug and replug firmly. <span class="screenshot-hint">📷 Suggestion: Photo of checking HDMI cable ends.</span>' },
            { text: '<strong>Refresh Rate:</strong> Settings → System → Display → Advanced display settings. Ensure the refresh rate matches your monitor specs (e.g., 60Hz or 144Hz). <span class="screenshot-hint">📷 Suggestion: Screenshot of Advanced Display Settings showing Hz.</span>' },
            { text: '<strong>Driver Update:</strong> Flickering can indicate a crashing GPU driver. Update or reinstall via DDU. <span class="screenshot-hint">📷 Suggestion: Screenshot of Nvidia/AMD driver update screen.</span>' },
            { text: '<strong>Test Another Monitor:</strong> Connect PC to TV. If no flicker, your monitor is failing.' }
        ]
    },
    'computer-freezes': {
        title: 'Computer Freezes Randomly',
        summary: 'Check overheating, bad RAM, failing drive.',
        description: "Your Windows PC suddenly freezes — the cursor stops, the screen is stuck, and any audio loops repeatedly. Sometimes it recovers after a minute; other times you must force-restart by holding the power button. Random freezes usually indicate a hardware problem: overheating, failing RAM, or a dying hard drive.",
        causes: [
            "CPU or GPU overheating causing the system to pause (thermal throttling)",
            "Failing RAM stick producing random read/write errors",
            "Hard drive with bad sectors causing the system to wait while reading data",
            "Power supply underpowered or failing under high load",
            "GPU driver bug causing a system hang",
        ],
        tips: [
            "Check Windows Reliability Monitor (search Start menu) — it shows a timeline of errors and reveals patterns.",
            "Try running with one RAM stick at a time to check if a specific module causes freezes.",
            "CrystalDiskInfo (free tool) checks hard drive health — \"Caution\" or \"Bad\" means back up data immediately.",
            "If freezes only happen during gaming, the GPU or its driver is the most likely cause.",
        ],
        technicianNote: "If freezes happen randomly with no clear pattern, and both MemTest86 and CrystalDiskInfo find nothing — the motherboard or CPU may be failing. A technician can swap components methodically to isolate the faulty part.",
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Monitor Temps:</strong> Overheating causes throttling/freezing. Clean dust from fans. <span class="screenshot-hint">📷 Suggestion: Screenshot of HWMonitor showing high CPU temps.</span>' },
            { text: '<strong>Check Disk Health:</strong> Download CrystalDiskInfo. If your drive Health Status is "Caution" or "Bad", backup immediately. <span class="screenshot-hint">📷 Suggestion: Screenshot of CrystalDiskInfo.</span>' },
            { text: '<strong>Reliability History:</strong> Search "View reliability history" in Start. Look for critical red X events matching the freeze time. <span class="screenshot-hint">📷 Suggestion: Screenshot of Reliability Monitor graph.</span>' },
            { text: '<strong>Check RAM:</strong> Reseat RAM sticks.' }
        ]
    },
    'slow-boot-time': {
        title: 'Slow Boot Time',
        summary: 'Disable startup apps, enable Fast Startup, upgrade to SSD.',
        description: "Your Windows PC takes several minutes to start up and become usable. You see the spinning circle for a long time and the desktop is slow and unresponsive for minutes after login. Slow boot times are almost always caused by too many startup programs or running Windows on a slow HDD instead of an SSD.",
        causes: [
            "Too many apps set to auto-start with Windows (Steam, Discord, Spotify, OneDrive)",
            "Windows is installed on a slow spinning HDD instead of a fast SSD",
            "Fast Startup option is turned off",
            "BIOS spending too long scanning for boot devices before handing over to Windows",
            "Windows has pending updates that apply during startup",
        ],
        tips: [
            "Task Manager Startup tab shows \"Startup impact\" (High/Medium/Low) — disable all High impact apps you do not need.",
            "\"Last BIOS time\" shown in Task Manager Startup tab shows how long BIOS takes — over 15s means check BIOS settings.",
            "Upgrading from HDD to SSD typically cuts boot time from 2–3 minutes to under 15 seconds.",
        ],
        technicianNote: "If boot time is very slow even with an SSD and few startup apps, Windows may have corrupted startup files. Run \"sfc /scannow\" in Admin Command Prompt. A technician can also perform a Windows repair installation that fixes startup issues without wiping your files.",
        category: 'performance', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Disable Startups:</strong> Task Manager → Startup. Disable high-impact apps like Steam, Discord, Spotify. <span class="screenshot-hint">📷 Suggestion: Screenshot of Task Manager Startup tab.</span>' },
            { text: '<strong>Fast Startup:</strong> Control Panel → Power Options → Choose what power buttons do. Check "Turn on fast startup". <span class="screenshot-hint">📷 Suggestion: Screenshot of Power Options "Choose what power buttons do".</span>' },
            { text: '<strong>Upgrade to SSD:</strong> If you are booting from an HDD, cloning to a SATA or NVMe SSD is the single biggest upgrade. <span class="screenshot-hint">📷 Suggestion: Photo of an SSD vs HDD.</span>' },
            { text: '<strong>BIOS Time:</strong> Check "Last BIOS time" in Task Manager Startup tab. If high (>15s), disable unneeded BIOS boot options.' }
        ]
    },
    'file-permission-denied': {
        title: 'File Permission Denied',
        summary: 'Take ownership, run as admin, check attributes.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Take Ownership:</strong> Right-click file/folder → Properties → Security → Advanced. Change Owner to your username. <span class="screenshot-hint">📷 Suggestion: Screenshot of Advanced Security Settings "Owner" tab.</span>' },
            { text: '<strong>Run as Admin:</strong> If deleting a system file, ensure you have Administrator privileges. <span class="screenshot-hint">📷 Suggestion: Context menu "Run as administrator".</span>' },
            { text: '<strong>Check Read-only:</strong> Properties → General. Uncheck "Read-only". <span class="screenshot-hint">📷 Suggestion: File Properties "General" tab.</span>' }
        ]
    },
    'dll-missing-error': {
        title: 'DLL Missing Error',
        summary: 'Install Visual C++ Redistributable, DirectX, or reinstall app.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Install Visual C++:</strong> Download "Visual C++ Redistributable All-in-One" to fix `msvcp140.dll` type errors. <span class="screenshot-hint">📷 Suggestion: Screenshot of Microsoft Visual C++ downloads page.</span>' },
            { text: '<strong>Install DirectX:</strong> For `d3dx9_xx.dll` errors, install the DirectX End-User Runtime Web Installer. <span class="screenshot-hint">📷 Suggestion: Screenshot of DirectX Installer.</span>' },
            { text: '<strong>Reinstall App:</strong> The DLL might be specific to the program and corrupted. Reinstalling fixes it. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Apps & Features" uninstalling the app.</span>' },
            { text: '<strong>System File Checker:</strong> `sfc /scannow` can restore system DLLs. <span class="screenshot-hint">📷 Suggestion: Command Prompt running SFC.</span>' }
        ]
    },
    'disk-usage-100': {
        title: '100% Disk Usage',
        summary: 'Disable SysMain, Windows Search, check for SSD health.',
        description: "Task Manager shows your Disk is at 100% even when you are not doing anything. This makes everything impossibly slow — clicks take seconds, apps take forever to open. This is extremely common on PCs with old spinning hard drives (HDDs) running Windows 10 or 11, because modern Windows makes more disk requests than old HDDs can handle.",
        causes: [
            "SysMain (Superfetch) constantly pre-loading apps, maxing out old HDDs",
            "Windows Search indexing files in the background",
            "Windows Update downloading or installing silently",
            "Failing HDD with bad sectors responding very slowly",
            "Malware (especially crypto miners) running at full disk speed",
        ],
        tips: [
            "In Task Manager, click the Disk column header to sort — this immediately shows which process is using the most disk.",
            "Upgrading from HDD to SSD permanently eliminates this problem and makes the PC feel completely new.",
            "Pause Windows Updates temporarily (Settings → Windows Update → Pause updates) to test if that is the cause.",
        ],
        technicianNote: "If disk usage stays at 100% even after disabling SysMain and Windows Search, and CrystalDiskInfo shows a Caution or Bad health status for the drive, it is physically failing. Back up all data immediately and have a technician replace the drive with an SSD.",
        category: 'performance', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Disable SysMain:</strong> Services (`services.msc`) → SysMain → Stop → Disabled. This service preloads apps but often chokes HDDs. <span class="screenshot-hint">📷 Suggestion: Screenshot of Services.msc with SysMain selected.</span>' },
            { text: '<strong>Check Disk Health:</strong> High active time can mean a failing drive. Use CrystalDiskMark to test speeds. <span class="screenshot-hint">📷 Suggestion: Screenshot of CrystalDiskMark operating on a drive.</span>' },
            { text: '<strong>Upgrade to SSD:</strong> Modern Windows 10/11 is not designed for mechanical hard drives as boot drives. <span class="screenshot-hint">📷 Suggestion: Photo comparison of an HDD vs an SSD.</span>' },
            { text: '<strong>Check Malware:</strong> Use Malwarebytes to scan. Crypto miners often hide and max out usage.' }
        ]
    },
    'ram-failure': {
        title: 'RAM Failure Symptoms',
        summary: 'Random crashes, corrupted files, BSOD loops.',
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>MemTest86:</strong> Create a bootable USB with MemTest86. Boot from it to run a comprehensive RAM test (takes hours). <span class="screenshot-hint">📷 Suggestion: Photo of a monitor running MemTest86.</span>' },
            { text: '<strong>Single Stick Test:</strong> If you have 2 sticks, remove one. If crashes stop, the removed stick is bad. Swap to confirm. <span class="screenshot-hint">📷 Suggestion: Photo of a motherboard with one RAM stick removed.</span>' },
            { text: '<strong>XMP Profile:</strong> If you just built the PC, disable XMP/DOCP in BIOS to see if it stabilizes. <span class="screenshot-hint">📷 Suggestion: Photo of BIOS XMP settings.</span>' }
        ]
    },
    'psu-failure': {
        title: 'PSU Failure Symptoms',
        summary: 'Random shutdowns, coil whine, burning smell.',
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Shutdown Under Load:</strong> If PC shuts off instantly (black screen) when gaming, the PSU can\'t handle the power spike. Check Event Viewer for "Kernel-Power 41". <span class="screenshot-hint">📷 Suggestion: Screenshot of Event Viewer showing Kernel-Power 41 error.</span>' },
            { text: '<strong>Paperclip Test:</strong> Unplug PC. Unplug 24-pin cable. Bridge green wire with a black wire. Fan should spin. (Basic test only). <span class="screenshot-hint">📷 Suggestion: Diagram of the 24-pin connector paperclip bridge.</span>' },
            { text: '<strong>Smell Test:</strong> If you smell ozone or burning plastic near the back vent, unplug immediately and replace.' }
        ]
    },
    'gpu-artifacting': {
        title: 'GPU Artifacting',
        summary: 'Green lines, dots, texture glitches in games.',
        category: 'hardware', difficulty: 'Hard', os: ['Windows'],
        steps: [
            { text: '<strong>Check Overclock:</strong> If you used MSI Afterburner, reset to defaults. Unstable memory OC causes artifacts. <span class="screenshot-hint">📷 Suggestion: Screenshot of MSI Afterburner reset button.</span>' },
            { text: '<strong>Check Temps:</strong> Overheating VRAM can cause glitches. Ensure GPU fans are spinning. <span class="screenshot-hint">📷 Suggestion: Screenshot of GPU-Z Sensors tab.</span>' },
            { text: '<strong>Dying GPU:</strong> If artifacts appear in BIOS or boot logo, the card is likely physically failing. <span class="screenshot-hint">📷 Suggestion: Photo of a screen with graphical artifacts.</span>' }
        ]
    },
    'stuck-pixel': {
        title: 'Stuck Pixel',
        summary: 'Fix bright/colored dots on monitor.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>JScreenFix:</strong> Visit JScreenFix.com. Drag the flashing box over the stuck pixel for 10-30 minutes. <span class="screenshot-hint">📷 Suggestion: Screenshot of JScreenFix website.</span>' },
            { text: '<strong>Massage Method:</strong> Turn off monitor. Apply gentle pressure on the pixel with a damp cloth. Turn on monitor while holding pressure. Release.' },
            { text: '<strong>Dead vs Stuck:</strong> Black dot = Dead (usually permanent). Colored dot = Stuck (fixable).' }
        ]
    },
    'laptop-overheating': {
        title: 'Laptop Overheating',
        summary: 'Clean dust, use cooling pad, undervolting.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Elevate Rear:</strong> Prop up the back of the laptop by 1 inch to allow airflow into intake vents. <span class="screenshot-hint">📷 Suggestion: Photo of a laptop stand or cooling pad.</span>' },
            { text: '<strong>Clean Vents:</strong> Use compressed air in short bursts into the exhaust vents to dislodge dust bunnies. <span class="screenshot-hint">📷 Suggestion: Photo of compressed air cleaning laptop vents.</span>' },
            { text: '<strong>Repaste:</strong> (Advanced) Disassemble laptop heatpipes and apply new thermal paste (e.g., Arctic MX-4). <span class="screenshot-hint">📷 Suggestion: Photo of a laptop heatsink removed.</span>' }
        ]
    },
    'touchpad-not-working': {
        title: 'Touchpad Not Working',
        summary: 'Check Fn key, drivers, settings.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Fn Key Toggle:</strong> Look for a touchpad icon on F-keys (e.g., F6). Press Fn + F6 to toggle it on. <span class="screenshot-hint">📷 Suggestion: Photo of laptop F-keys highlighting the touchpad toggle.</span>' },
            { text: '<strong>Check Settings:</strong> Settings → Devices → Touchpad. Ensure the toggle is On. <span class="screenshot-hint">📷 Suggestion: Screenshot of Windows Touchpad settings.</span>' },
            { text: '<strong>Driver:</strong> Device Manager → Mice and other pointing devices. Uninstall driver and restart. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager "Mice and other pointing devices".</span>' }
        ]
    },
    'laptop-battery-drain': {
        title: 'Laptop Battery Draining Fast',
        summary: 'Lower brightness, check background apps, battery saver.',
        category: 'battery', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Screen Brightness:</strong> The screen uses the most power. Lower it to 50%. <span class="screenshot-hint">📷 Suggestion: Screenshot of Action Center brightness slider.</span>' },
            { text: '<strong>Battery Saver:</strong> Click the battery icon → Drag slider to "Best Battery Life". <span class="screenshot-hint">📷 Suggestion: Screenshot of Battery settings "Battery Saver" on.</span>' },
            { text: '<strong>Battery Health:</strong> run `powercfg /batteryreport` to see if the physical battery is worn out. <span class="screenshot-hint">📷 Suggestion: Screenshot of "powercfg /batteryreport" command output.</span>' }
        ]
    },
    'fan-noise-loud': {
        title: 'Fan Noise Loud',
        summary: 'Clean dust, adjust BIOS curve, replace bearing.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Dust Buildup:</strong> Dust on blades causes imbalance and noise. Clean carefully with a brush/air. <span class="screenshot-hint">📷 Suggestion: Photo of a dusty fan.</span>' },
            { text: '<strong>BIOS Curve:</strong> Enter BIOS → Hardware Monitor. Set fan profile to "Silent" or "Standard" instead of "Turbo". <span class="screenshot-hint">📷 Suggestion: Photo of BIOS Hardware Monitor fan curve.</span>' },
            { text: '<strong>Bearing Fail:</strong> If it makes a grinding/rattling sound, the bearing is shot. Replace the fan.' }
        ]
    },
    'coil-whine': {
        title: 'Coil Whine',
        summary: 'High pitched noise from PC under load.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Cap FPS:</strong> High FPS (e.g., 300+ in menus) causes coil whine. Limit FPS in Nvidia Control Panel or game settings. <span class="screenshot-hint">📷 Suggestion: Screenshot of Nvidia Control Panel Max Frame Rate setting.</span>' },
            { text: '<strong>PSU-GPU Combo:</strong> Some PSU and GPU combinations just resonate. Swapping the PSU might fix it.' },
            { text: '<strong>Burn-in:</strong> Sometimes running a benchmark (Heaven/Furmark) for a few hours can reduce whine on new cards. <span class="screenshot-hint">📷 Suggestion: Screenshot of a stress test like Heaven Benchmark.</span>' }
        ]
    },
    'usb-not-recognized': {
        title: 'USB Device Not Recognized',
        summary: 'Update driver, power management, test ports.',
        category: 'hardware', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Unplug PC:</strong> Unplug power cord for 1 minute. This resets the motherboard USB controller.' },
            { text: '<strong>Update Driver:</strong> Device Manager → Universal Serial Bus controllers. Uninstall "Unknown USB Device" and restart. <span class="screenshot-hint">📷 Suggestion: Screenshot of Device Manager showing "Unknown USB Device".</span>' },
            { text: '<strong>Power Management:</strong> Root Hub Properties → Power Management. Uncheck "Allow computer to turn off this device". <span class="screenshot-hint">📷 Suggestion: Screenshot of USB Root Hub properties "Power Management" tab.</span>' }
        ]
    },
    'sd-card-not-reading': {
        title: 'SD Card Not Reading',
        summary: 'Check lock switch, update driver, format.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Lock Switch:</strong> Ensure the tiny physical slider on the side of the card is in the "Unlock" (up) position. <span class="screenshot-hint">📷 Suggestion: Photo of an SD card lock switch in "Lock" vs "Unlock" position.</span>' },
            { text: '<strong>Drive Letter:</strong> Disk Management. If card shows up but no letter, assign one (e.g., E:). <span class="screenshot-hint">📷 Suggestion: Screenshot of Disk Management showing SD card partition.</span>' },
            { text: '<strong>Format:</strong> If it asks to format, the file system is corrupt. Formatting erases data but restores the card. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Format" context menu in File Explorer.</span>' }
        ]
    },
    'second-monitor-not-detected': {
        title: 'Second Monitor Not Detected',
        summary: 'Win+P, check cable, update driver.',
        category: 'hardware', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Project Mode:</strong> Press Win+P. Select "Extend". <span class="screenshot-hint">📷 Suggestion: Screenshot of the "Project" sidebar with "Extend" highlighted.</span>' },
            { text: '<strong>Detect Button:</strong> Settings → System → Display. Click "Detect" under Multiple displays. <span class="screenshot-hint">📷 Suggestion: Screenshot of Display Settings showing the "Detect" button.</span>' },
            { text: '<strong>Cable Spec:</strong> Ensure your HDMI/DP cable supports the resolution/refresh rate of the monitor.' }
        ]
    },
    'windows-search-broken': {
        title: 'Windows Search Not Working',
        summary: 'Restart services, rebuild indexer.',
        category: 'software', difficulty: 'Medium', os: ['Windows'],
        steps: [
            { text: '<strong>Restart Service:</strong> Services → Windows Search → Restart. <span class="screenshot-hint">📷 Suggestion: Screenshot of Services.msc with "Windows Search" selected.</span>' },
            { text: '<strong>Rebuild Index:</strong> Control Panel → Indexing Options → Advanced → Rebuild. <span class="screenshot-hint">📷 Suggestion: Screenshot of Indexing Options "Advanced" dialog.</span>' },
            { text: '<strong>Troubleshooter:</strong> Settings → Search → Searching Windows → Run the troubleshooter.' }
        ]
    },
    'taskbar-frozen': {
        title: 'Taskbar Frozen',
        summary: 'Restart Explorer, run SFC.',
        category: 'software', difficulty: 'Easy', os: ['Windows'],
        steps: [
            { text: '<strong>Restart Explorer:</strong> Task Manager (Ctrl+Shift+Esc). Find "Windows Explorer". Right-click → Restart. <span class="screenshot-hint">📷 Suggestion: Screenshot of Task Manager right-clicking "Windows Explorer".</span>' },
            { text: '<strong>Powershell Fix:</strong> (Advanced) Run a specific Powershell command to re-register the taskbar app package. <span class="screenshot-hint">📷 Suggestion: Screenshot of PowerShell Administrator window.</span>' },
            { text: '<strong>Updates:</strong> Check for Windows Updates. Microsoft often patches taskbar bugs.' }
        ]
    },
    'ghost-touch': {
        title: 'Ghost Touch',
        summary: 'Screen clicks by itself. Static, digitizer issue, or bad charger.',
        description: "The screen clicks or swipes by itself. This can lead to wrong password lockouts.",
        causes: [
          "Electromagnetic noise from cheap chargers",
          "Invisible micro-cracks in digitizer",
          "Moisture under protector",
          "Static buildup"
        ],
        tips: [
          "Unplug charger to test",
          "Clean screen with dry cloth",
          "Remove screen protector",
          "Restart device"
        ],
        technicianNote: "If it persists without a charger/case, the digitizer layer is faulty. Requires a full screen replacement.",
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Remove Case/Protector:</strong> A warped screen protector or case pressing on the edges can cause ghost touches. <span class="screenshot-hint">📷 Suggestion: Photo of a phone with a thick case or screen protector peeling.</span>' },
            { text: '<strong>Static Discharge:</strong> Touch a metal object to ground yourself, then wipe the screen with a slightly damp cloth.' },
            { text: '<strong>Unplug Charger:</strong> Cheap 3rd party chargers cause electrical noise that confuses the digitizer. <span class="screenshot-hint">📷 Suggestion: Photo of a certified charger vs a generic one.</span>' }
        ]
    },
    'app-not-installing': {
        title: 'App Not Installing',
        summary: 'Check storage, compatibility, clear Play Store cache.',
        description: "You try to download an app from the Play Store or App Store, but it gets stuck on \"Pending\", \"Downloading\", or shows an \"Unable to Install\" error.",
        causes: [
            "Insufficient storage space for the new app",
            "The app is not compatible with your device or OS version",
            "Network settings are preventing large downloads over mobile data",
            "The store cache (Google Play Store) is corrupted",
        ],
        tips: [
            "Ensure you have at least 1GB of free space.",
            "Restart your Wi-Fi or switch to a different connection.",
            "Check if your \"Date & Time\" is set automatically — incorrect time blocks app store connections.",
        ],
        technicianNote: "If the app store fails to download anything across multiple Wi-Fi networks, your system \"Download Manager\" service might be disabled or corrupted. A technician can reset the system services without deleting your data.",
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Check Storage:</strong> You need at least 500MB+ free space for most apps to unpack and install. <span class="screenshot-hint">📷 Suggestion: Screenshot of Storage settings showing low space.</span>' },
            { text: '<strong>Clear Store Cache:</strong> (Android) Settings → Apps → Google Play Store → Storage → Clear Cache. <span class="screenshot-hint">📷 Suggestion: Screenshot of App Info for Play Store showing "Clear Cache".</span>' },
            { text: '<strong>Check OS Version:</strong> The app might require a newer version of iOS or Android than you have.' }
        ]
    },
    'gps-signal-lost': {
        title: 'GPS Signal Lost',
        summary: 'Improve accuracy, remove obstruction, check location settings.',
        description: "Navigation shows 'Searching for GPS' or location jumps around erratically.",
        causes: [
          "Signal blockage by tall buildings",
          "Metal/Magnetic case interference",
          "Location Accuracy turned off",
          "Incorrect system date/time"
        ],
        tips: [
          "Enable Google Location Accuracy",
          "Calibrate with figure-8 motion",
          "Remove case for testing",
          "Go to an open area"
        ],
        technicianNote: "Persistent failure is often a loose antenna cable inside. A technician can reseat or replace the cable.",
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Go Outside:</strong> GPS needs line-of-sight to satellites. Tall buildings and tunnels block signals.' },
            { text: '<strong>High Accuracy Mode:</strong> (Android) Settings → Location → Mode → High Accuracy (uses Wi-Fi + GPS). <span class="screenshot-hint">📷 Suggestion: Screenshot of Location settings "Mode" or "Google Location Accuracy".</span>' },
            { text: '<strong>Compass Calibration:</strong> Open Google Maps and move your phone in a figure-8 motion to calibrate. <span class="screenshot-hint">📷 Suggestion: Diagram of the figure-8 motion for compass calibration.</span>' }
        ]
    },
    'sim-not-detected': {
        title: 'SIM Card Not Detected',
        summary: 'Re-insert SIM, clean contacts, test another phone.',
        description: "The phone shows \"No SIM\", \"SIM failure\", or \"Invalid SIM\", even though a SIM card is inserted.",
        causes: [
            "The SIM card is dirty or scratched",
            "The SIM tray is not fully flush or is bent",
            "Incorrect network mode (e.g., trying to use 5G on a 4G SIM)",
            "The SIM reader pins inside the phone are broken",
        ],
        tips: [
            "Remove the SIM and wipe the gold contacts with a clean, dry cloth.",
            "Try a friend's SIM in your phone to see if your phone is the problem.",
            "Toggle Airplane Mode for a few seconds.",
        ],
        technicianNote: "If multiple SIM cards are not detected, the physical SIM slot is likely damaged. On some phones, this is a separate module that can be easily replaced. On others, it requires micro-soldering. A technician can diagnose the specific fault.",
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Re-seat SIM:</strong> Use a SIM tool to eject the tray. Wipe the SIM gold contacts with a soft cloth. Re-insert. <span class="screenshot-hint">📷 Suggestion: Photo of ejecting a SIM tray.</span>' },
            { text: '<strong>Airplane Toggle:</strong> Toggle Airplane mode on/off to force the modem to re-read the SIM. <span class="screenshot-hint">📷 Suggestion: Screenshot of Quick Settings Airplane Mode icon.</span>' },
            { text: '<strong>Test Swap:</strong> Put your SIM in another phone. If it fails there too, you need a new SIM from your carrier.' }
        ]
    },
    'headphone-jack-broken': {
        title: 'Headphone Jack Not Working',
        summary: 'Remove lint, check audio routing.',
        description: "Headphones not detected, single ear sound, or crackling when moving.",
        causes: [
          "Pocket lint compressed at bottom",
          "Worn out internal tension pins",
          "Liquid damage short circuit",
          "Damaged headphone plug"
        ],
        tips: [
          "Clean with wooden toothpick",
          "Try different headphones",
          "Rotate plug while inserted"
        ],
        technicianNote: "The jack is usually on a small, inexpensive board. Replacing the charging/audio board is common.",
        category: 'hardware', difficulty: 'Easy', os: ['Android'],
        steps: [
            { text: '<strong>Lint Picking:</strong> Use a wooden toothpick to gently scrape out pocket lint from the bottom of the jack. <span class="screenshot-hint">📷 Suggestion: Macro photo of lint inside a headphone jack.</span>' },
            { text: '<strong>Restart:</strong> Sometimes the software audio routing gets stuck on "Speaker" mode.' },
            { text: '<strong>Try Other Headphones:</strong> Confirm it is the jack, not the headphones.' }
        ]
    },
    'screen-burn-in': {
        title: 'Screen Burn-in',
        summary: 'Prevention and mitigation for OLED screens.',
        description: "Faint, permanent ghosting visible on the screen, common on OLED panels.",
        causes: [
          "Static image on high brightness",
          "White UI elements on black backgrounds",
          "Heat + high brightness exposure"
        ],
        tips: [
          "Use Adaptive Brightness",
          "Set Auto-Lock to 30s",
          "Enable Dark Mode",
          "Avoid long GPS usage in sun"
        ],
        technicianNote: "Burn-in is physical pixel damage and cannot be fixed by software. Screen replacement is the only fix.",
        category: 'hardware', difficulty: 'Hard', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>White Screen Test:</strong> Open a pure white image. Look for faint icons (like the keyboard or status bar) that shouldn\'t be there. <span class="screenshot-hint">📷 Suggestion: Photo of a screen showing faint icons on a white background.</span>' },
            { text: '<strong>Lower Brightness:</strong> High brightness accelerates burn-in. Keep it under 70%. <span class="screenshot-hint">📷 Suggestion: Screenshot of Auto Refresh Rate or Brightness settings.</span>' },
            { text: '<strong>Pixel Refresher:</strong> Some phones have a "Panel Protect" feature. Otherwise, play a "Dead Pixel Fixer" video on YouTube for 1 hour.' }
        ]
    },
    'speaker-crackling': {
        title: 'Speaker Crackling',
        summary: 'Check for water, blown speaker, or software glitch.',
        description: "Audio sounds fuzzy, distorted, or pops at high volumes.",
        causes: [
          "Torn speaker diaphragm",
          "Metal dust on internal magnet",
          "Water trapped in mesh",
          "Software EQ distortion"
        ],
        tips: [
          "Use 'Water Eject' sound video",
          "Limit volume to 80%",
          "Test with headphones",
          "Check for software update"
        ],
        technicianNote: "Technicians can often fix this by cleaning the magnet. If the diaphragm is torn, the module needs replacement.",
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Water Damage?</strong> If it got wet recently, play a specific "Water Eject" sound (low frequency tone) to push water out. <span class="screenshot-hint">📷 Suggestion: Screenshot of a "Water Eject" shortcut or YouTube video.</span>' },
            { text: '<strong>Volume Test:</strong> Does it crackle at low volume? If only at max volume, the speaker diaphragm might be blown.' },
            { text: '<strong>Safe Mode:</strong> Boot to safe mode. If no crackle, an app (like an equalizer) is causing distortion. <span class="screenshot-hint">📷 Suggestion: Photo of a phone screen showing "Safe Mode" watermark.</span>' }
        ]
    },
    'vibration-failed': {
        title: 'Vibration Not Working',
        summary: 'Check settings, haptic feedback, motor failure.',
        description: "No vibration for calls/haptics even when settings are correct.",
        causes: [
          "Software 'Do Not Disturb' glitch",
          "Jammed motor (Taptic Engine)",
          "Disconnected motor cable",
          "Physical motor burnout"
        ],
        tips: [
          "Check Sound/Haptic settings",
          "Restart the phone",
          "Give a firm tap on the back"
        ],
        technicianNote: "Vibration motors are small mechanical units. If jammed, a tap might help, else it needs replacement.",
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Settings Check:</strong> Settings → Sound & Vibration. Ensure "Vibrate on Ring" and "Haptic Feedback" are ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of Sound & Vibration settings.</span>' },
            { text: '<strong>Test Motor:</strong> User a diagnostic code (`*#0*#` on Samsung) or an app to trigger the vibration motor. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Samsung diagnostic menu *#0*#.</span>' },
            { text: '<strong>Do Not Disturb:</strong> Ensure DND mode isn\'t suppressing vibration. <span class="screenshot-hint">📷 Suggestion: Screenshot of Do Not Disturb settings.</span>' }
        ]
    },
    'wireless-charging-fail': {
        title: 'Wireless Charging Failed',
        summary: 'Remove thick case, align coils, check power brick.',
        description: "Your phone doesn't react when placed on a wireless charging pad, or it starts charging and then stops after a few seconds.",
        causes: [
          "Thick or metal-based phone case blocking induction",
          "Poor alignment between phone and charging coil",
          "Underpowered USB power brick connected to the pad",
          "Overheating during the charge cycle"
        ],
        tips: [
          "Remove the case to rule out interference",
          "Ensure the phone is perfectly centered on the pad",
          "Use a 20W or higher PD/QC power adapter",
          "Check for software 'Battery Protection' limits"
        ],
        technicianNote: "Wireless charging uses an internal induction coil usually taped to the battery. If it fails without a case, the coil or the NFC/Charging flex cable is likely torn or disconnected.",
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Remove Case:</strong> Thick or metal cases block induction. Pop the case off and retry. <span class="screenshot-hint">📷 Suggestion: Photo of a phone case next to the phone.</span>' },
            { text: '<strong>Alignment:</strong> The charging coil is usually in the exact center. Align it perfectly with the pad. <span class="screenshot-hint">📷 Suggestion: Diagram showing proper coil alignment.</span>' },
            { text: '<strong>Power Brick:</strong> The pad needs enough power. Don\'t plug a fast wireless pad into an old 5W iPhone brick. <span class="screenshot-hint">📷 Suggestion: Photo of a 20W+ power adapter.</span>' }
        ]
    },
    'fingerprint-sensor-fail': {
        title: 'Fingerprint Sensor Failed',
        summary: 'Clean sensor, re-enroll print, check scratches.',
        description: "The fingerprint sensor refuses to recognize your touch, or it doesn't register a touch at all. This is common if the sensor is dirty or if a new screen protector has been applied.",
        causes: [
            "Dirt, sweat, or moisture on the sensor or your finger",
            "A thick or dirty screen protector (for under-display sensors)",
            "Software glitch in the security module",
            "The sensor has been scratched or physically damaged",
            "Dry skin not being recognized accurately",
        ],
        tips: [
            "Thoroughly clean the sensor area with a dry cloth.",
            "Delete your old fingerprint and re-register it (Registering the same finger twice can improve accuracy).",
            "On Android, ensure \"Touch Sensitivity\" is turned on if you use a screen protector.",
            "Try moisturising your hands if they are extremely dry — sensors struggle with dry, cracked skin.",
        ],
        technicianNote: "For under-display sensors, a screen replacement usually includes a new sensor. For physical sensors (on the side or back), a technician can replace the button/sensor module independently. Note: On iPhones and some Pixels, the sensor is linked to the motherboard for security and may lose \"Touch ID\" functionality unless repaired by an authorized center.",
        category: 'hardware', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Clean Sensor:</strong> Grease/oil prevents reading. Wipe the scanner (or screen spot) clean. <span class="screenshot-hint">📷 Suggestion: Photo of cleaning the fingerprint sensor.</span>' },
            { text: '<strong>Re-enroll:</strong> Delete the old fingerprint and register it again exactly how you normally hold the phone. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Add Fingerprint" screen.</span>' },
            { text: '<strong>Moisture:</strong> Wet fingers won\'t scan. Dry your hands.' }
        ]
    },
    'auto-rotate-fail': {
        title: 'Screen Won’t Rotate',
        summary: 'Check lock, calibrate sensors, "tap" fix.',
        description: "The screen remains in portrait mode even when you tilt the phone sideways for videos or photos.",
        causes: [
          "'Rotation Lock' is accidentally enabled in Quick Settings",
          "Accelerometer sensor is stuck or 'frozen'",
          "A specific app is forcing portrait orientation",
          "System software bug affecting sensor orientation"
        ],
        tips: [
          "Toggle Rotation Lock OFF in Control Center/Quick Settings",
          "Perform a firm 'tap' on the back to unstuck the sensor",
          "Check if it works in the Camera app (which uses rotation)",
          "Restart the phone to reload sensor drivers"
        ],
        technicianNote: "The accelerometer is a MEMS chip on the motherboard. If it fails across all apps and diagnostics, the chip itself is likely faulty, but often a firmware recalibration can fix it.",
        category: 'sensor', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Rotation Lock:</strong> Check Quick Settings/Control Center. Ensure the "Lock" icon is OFF. <span class="screenshot-hint">📷 Suggestion: Screenshot of Quick Settings "Auto-rotate" icon.</span>' },
            { text: '<strong>The "Tap" Fix:</strong> Sometimes the accelerometer gets stuck. Give the back of the phone a firm tap with your finger. <span class="screenshot-hint">📷 Suggestion: Diagram showing where to tap the back of the phone.</span>' },
            { text: '<strong>Calibrate:</strong> Open Google Maps and move phone in figure-8 to unstuck sensors. <span class="screenshot-hint">📷 Suggestion: Screenshot of a Compass/Level app.</span>' }
        ]
    },
    'proximity-sensor-fail': {
        title: 'Screen Stays On In Call',
        summary: 'Clean top bezel, remove screen protector obstruction.',
        description: "The screen stays on during a call, causing your cheek to accidentally press 'Mute' or 'Hang Up', or the screen stays black after you pull it away from your ear.",
        causes: [
          "Dirt, oil, or earwax covering the sensor near the earpiece",
          "Screen protector without a proper cutout for the sensor",
          "Light leakage from a poorly fitted replacement screen",
          "Software bug in the dialer/calibration"
        ],
        tips: [
          "Wipe the top bezel thoroughly with a cloth",
          "Ensure the screen protector isn't lifting at the top",
          "Remove the case if it overhangs the top edge",
          "Use a sensor diagnostic app to check performance"
        ],
        technicianNote: "The proximity sensor is usually part of the front camera or earpiece flex cable. If cleaning doesn't work, replacing the front sensor assembly usually restores functionality.",
        category: 'sensor', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Clean Bezel:</strong> The sensor is near the earpiece. Ear wax or face oil blocks it. Wipe it clean.' },
            { text: '<strong>Screen Protector:</strong> Cheap protectors often cover the sensor. If it has no cutout for the sensor, remove it. <span class="screenshot-hint">📷 Suggestion: Photo of a screen protector covering the top sensors.</span>' },
            { text: '<strong>Diagnostic:</strong> (Android) Dial `*#77692#` (on some models) to test the Proximity Sensor. <span class="screenshot-hint">📷 Suggestion: Screenshot of a Sensor Test app.</span>' }
        ]
    },
    'mic-muffled': {
        title: 'Microphone Muffled',
        summary: 'Clean mic hole, check case obstruction.',
        description: "People tell you that you sound 'underwater', 'far away', or 'muffled' during calls, even though your signal is good.",
        causes: [
          "Dust, lint, or makeup clogging the tiny microphone holes",
          "Phone case misaligned and covering the bottom mic",
          "Protective film left on after a repair/new purchase",
          "Internal membrane damage from a splash or drop"
        ],
        tips: [
          "Clean mic holes with a very soft brush",
          "Remove the case and perform a test call",
          "Record a voice memo to check audio quality",
          "Check if Bluetooth is stealing the mic (e.g., hidden earbuds)"
        ],
        technicianNote: "Phones have multiple mics (bottom for calls, top for noise cancellation). If you sound muffled only on speakerphone, the top/noise mic is the problem. Technicians can replace these individual mic components.",
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Inspect Holes:</strong> Look at the tiny mic holes on the bottom/top. Are they clogged? Use a soft brush. <span class="screenshot-hint">📷 Suggestion: Macro photo of the microphone hole.</span>' },
            { text: '<strong>Case Check:</strong> Ensure your case isn\'t slightly misaligned and covering the mic hole. <span class="screenshot-hint">📷 Suggestion: Photo of a misaligned case covering the mic.</span>' },
            { text: '<strong>Voice Memos:</strong> Record a voice memo. If it sounds underwater, hardware is likely clogged or damaged. <span class="screenshot-hint">📷 Suggestion: Screenshot of the Voice Recorder app.</span>' }
        ]
    },
    'charging-overheating': {
        title: 'Overheating While Charging',
        summary: 'Remove case, use official charger, avoid usage.',
        description: "Your phone gets extremely hot while charging, or shows a \"Charging will resume when temperature returns to normal\" alert.",
        causes: [
            "Using the phone (especially gaming) while fast-charging",
            "A thick case trapping heat during the charge cycle",
            "Using a non-original or damaged high-wattage charger",
            "Internal battery resistance is increasing as it wears out",
        ],
        tips: [
            "Remove the phone case while charging.",
            "Don't charge your phone in direct sunlight.",
            "Use a slower charger (e.g., 5W instead of 20W) if the heat is concerning.",
            "Turn off the phone while charging for a few minutes to let it cool down.",
        ],
        technicianNote: "Excessive heat during charging is a major fire risk and degrades the battery fast. If it happens with the original charger and no case, the battery or the charging IC chip is faulty and must be replaced immediately.",
        category: 'battery', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Don’t Use It:</strong> Gaming while charging generates massive heat. Let it charge in peace.' },
            { text: '<strong>Remove Case:</strong> Cases trap heat. Remove it during charging if the room is warm. <span class="screenshot-hint">📷 Suggestion: Photo of removing a case while charging.</span>' },
            { text: '<strong>Cable Check:</strong> A damaged cable can have high resistance (heat). Swap the cable. <span class="screenshot-hint">📷 Suggestion: Photo of a frayed charging cable.</span>' }
        ]
    },
    'flashlight-not-working': {
        title: 'Flashlight Not Working',
        summary: 'Charge battery, close camera app, cool down.',
        description: "The flashlight icon in the shortcut menu is grayed out or turns off instantly when you press it.",
        causes: [
          "Battery is too low (some phones disable flash below 15%)",
          "Camera app is currently open and using the LED",
          "Phone is too hot (thermal safety feature)",
          "Physical LED burnout or motherboard connector issue"
        ],
        tips: [
          "Charge the phone above 20%",
          "Force close the camera app",
          "Let the phone cool down for 10 minutes",
          "Restart the device"
        ],
        technicianNote: "The flashlight is physically part of the back camera flash module. If it fails alongside the camera, it's usually a disconnected or dead back camera assembly.",
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Charge Up:</strong> Many phones disable the flash if battery is <5% or 15%. <span class="screenshot-hint">📷 Suggestion: Screenshot of Low Power Mode enabled.</span>' },
            { text: '<strong>Close Camera:</strong> If the Camera app is open in background, it hogs the LED resource. Swipe it away. <span class="screenshot-hint">📷 Suggestion: Screenshot of Closing apps in Recent Apps view.</span>' },
            { text: '<strong>Cool Down:</strong> If the phone is hot, flash is disabled to prevent LED damage.' }
        ]
    },
    'boot-loop': {
        title: 'Phone Stuck in Boot Loop',
        summary: 'Force restart, recovery mode, battery pull.',
        description: "Your phone is stuck on the logo screen (Apple logo or Android logo) and keeps restarting over and over again.",
        causes: [
            "Failed software update that corrupted the boot files",
            "The power button is stuck physically and keeps \"clicking\"",
            "The battery is so weak it cannot provide enough power to finish booting",
            "Full storage prevented a system update from finishing",
        ],
        tips: [
            "Try a \"Force Restart\" by holding the specific button combination for your model.",
            "Check if the power button feels clicky — if it feels \"mushy\", it might be stuck.",
            "Plug the phone into a PC to see if it is recognized in \"Recovery Mode\".",
        ],
        technicianNote: "If a force restart doesn't work, the phone likely needs a \"Firmware Flash\". This will restore the system software. If the battery is dead, it may also cause a boot loop. A technician can test both in under 15 minutes.",
        category: 'software', difficulty: 'Hard', os: ['Android'],
        steps: [
            { text: '<strong>Stuck Button:</strong> Ensure the power button isn\'t physically stuck down by a case or gunk. <span class="screenshot-hint">📷 Suggestion: Photo of a stuck power button.</span>' },
            { text: '<strong>Recovery Mode:</strong> Boot into Recovery (Vol Down + Power). Select "Wipe Cache Partition". <span class="screenshot-hint">📷 Suggestion: Photo of Android Recovery menu.</span>' },
            { text: '<strong>Factory Reset:</strong> Last resort in Recovery Mode: "Wipe Data/Factory Reset". <span class="screenshot-hint">📷 Suggestion: Photo of "Wipe Data/Factory Reset" option.</span>' }
        ]
    },
    'no-service': {
        title: 'No Service / Searching',
        summary: 'Toggle airplane, re-seat SIM, carrier settings.',
        description: "Your phone shows \"No Service\", \"SOS Only\", or \"Searching...\" continuously, making it impossible to use cellular data or make calls.",
        causes: [
            "Outdated carrier settings on your phone",
            "A faulty SIM card or damaged SIM tray pins",
            "The cellular antenna has become disconnected internally",
            "Your phone has been blacklisted (IMEI blocked) or account suspended",
            "A major software bug affecting the cellular radio",
        ],
        tips: [
            "Update your carrier settings: Settings > General > About (Wait for a popup).",
            "Toggle \"Selected Network\" from Automatic to manual and back.",
            "Reset Network Settings: Settings > General > Transfer or Reset > Reset > Reset Network Settings.",
        ],
        technicianNote: "If a \"No Service\" issue persists after a new SIM card and a network reset, the Baseband IC chip on the motherboard may be failing. This is a complex repair but fixable by a motherboard-level technician.",
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Outage Map:</strong> Check DownDetector to see if your carrier is having an outage. <span class="screenshot-hint">📷 Suggestion: Screenshot of DownDetector map.</span>' },
            { text: '<strong>Reset Network:</strong> Settings → General → Reset → Reset Network Settings. <span class="screenshot-hint">📷 Suggestion: Screenshot of Reset Network Settings confirmation.</span>' },
            { text: '<strong>Update Carrier Settings:</strong> (iOS) Settings → General → About. Wait 10s for a popup update. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Carrier Settings Update" popup.</span>' }
        ]
    },
    'cannot-send-sms': {
        title: 'Cannot Send SMS',
        summary: 'Check SMS center number, signal.',
        description: "You can receive messages but cannot send them, or messages show a red exclamation mark \"Not Delivered\".",
        causes: [
            "Incorrect SMS Center (SMSC) number in settings",
            "Your carrier plan has run out of SMS balance",
            "The recipient's number is blocked or incorrect",
            "Message setting is stuck trying to send via iMessage instead of SMS",
        ],
        tips: [
            "Check if you can make a call — if not, it's a signal issue, not an SMS issue.",
            "Turn off iMessage (for iPhones) temporarily to test if standard SMS works.",
            "Ensure the number is in the correct international format (e.g., +1 for USA).",
        ],
        technicianNote: "If calls work but SMS fails across all apps and a carrier reset doesn't help, the software messaging service might be corrupt. A technician can perform a full firmware reinstall to fix it.",
        category: 'connectivity', difficulty: 'Medium', os: ['Android'],
        steps: [
            { text: '<strong>SMSC Number:</strong> Messaging App → Settings → More → SMS Center. Verify this number matches your carrier’s spec.' },
            { text: '<strong>Clear Cache:</strong> Clear cache of the Messages app in Settings. <span class="screenshot-hint">📷 Suggestion: Screenshot of Messages app App Info.</span>' },
            { text: '<strong>Delete Old Threads:</strong> Sometimes having 50,000 texts crashes the database. Delete old threads.' }
        ]
    },
    'cannot-make-calls': {
        title: 'Cannot Make Calls',
        summary: 'Check VoLTE, Blocked numbers, Signal.',
        description: "Calls fail immediately when you try to dial, or you hear no dial tone. This can be a signal issue, a SIM card fault, or a software setting in the background.",
        causes: [
            "Airplane Mode or Do Not Disturb is accidentally on",
            "The SIM card has been deactivated or is faulty",
            "Your carrier has a temporary outage in the area",
            "Call barring or a blocked number list is active",
        ],
        tips: [
            "Try calling a different number to rule out the recipient being busy.",
            "Check if \"Call Forwarding\" is turned on — it can sometimes block outgoing calls.",
            "Toggle \"Caller ID\" settings off and on again.",
        ],
        technicianNote: "If calls fail even with full signal and a working SIM, the microphone or proximity sensor could be causing the call app to crash. A technician can run a hardware diagnostic to isolate the sensor from the cellular radio.",
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>VoLTE Toggle:</strong> Settings → Mobile Data → Options. Toggle "VoLTE" off and on. <span class="screenshot-hint">📷 Suggestion: Screenshot of Mobile Data settings showing VoLTE toggle.</span>' },
            { text: '<strong>Show Caller ID:</strong> Settings → Phone → Show My Caller ID. Ensure it is ON.' },
            { text: '<strong>Bill Pay:</strong> (Obvious but happens) Did your autopay fail? Check account status.' }
        ]
    },
    'spam-calls': {
        title: 'Too Many Spam Calls',
        summary: 'Use filtering apps, register DNC.',
        description: "You receive a high volume of unwanted telemarketing or scam calls every day.",
        causes: [
          "Your number was leaked in a public data breach",
          "Signing up for services that sell data to marketers",
          "Autodialer bots scanning random number ranges"
        ],
        tips: [
          "Enable 'Silence Unknown Callers' in settings",
          "Use a carrier-provided scam blocking app",
          "Register your number with the 'Do Not Call' registry",
          "Don't answer and 'decline' — this confirms your number is active"
        ],
        technicianNote: "This is a networking/data issue, not a hardware fault. Using third-party apps like TrueCaller can help filter these out at the system level.",
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Silence Unknown:</strong> (iOS) Settings → Phone → Silence Unknown Callers. <span class="screenshot-hint">📷 Suggestion: Screenshot of "Silence Unknown Callers" setting.</span>' },
            { text: '<strong>Spam Filter:</strong> (Android) Phone App → Settings → Caller ID & Spam. Turn on filtering. <span class="screenshot-hint">📷 Suggestion: Screenshot of Google Phone app Spam settings.</span>' },
            { text: '<strong>Carrier App:</strong> Most carriers (AT&T ActiveArmor, T-Mobile Scam Shield) have free blocking apps.' }
        ]
    },
    'screen-brightness-stuck': {
        title: 'Screen Brightness Stuck',
        summary: 'Sensor issue, auto-brightness bug.',
        description: "The screen is far too dim or too bright and doesn't change when you move the slider, or auto-brightness isn't reacting to light changes.",
        causes: [
          "Ambient light sensor is blocked by dirt or a case",
          "Adaptive Brightness driver has crashed",
          "Third-party screen dimming app is overriding system settings",
          "Internal hardware failure of the sensor"
        ],
        tips: [
          "Clean the top of the phone near the earpiece",
          "Toggle 'Adaptive Brightness' off and on",
          "Disable 'Blue Light Filter' or 'Night Shift'",
          "Restart the phone"
        ],
        technicianNote: "Low-light sensors are very sensitive to screen quality. If this happened after a screen replacement, the new screen may not have the necessary transparency or coating for the sensor to work.",
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Toggle Auto:</strong> Settings → Display. Turn "Adaptive Brightness" off and on again. <span class="screenshot-hint">📷 Suggestion: Screenshot of Display settings "Adaptive Brightness".</span>' },
            { text: '<strong>Sensor Check:</strong> The sensor is near the earpiece. Ensure a case or dirt isn\'t covering it.' },
            { text: '<strong>Restart:</strong> A simple reboot fixes most sensor driver glitches.' }
        ]
    },
    'keyboard-disappears': {
        title: 'Keyboard Disappears',
        summary: 'Gboard/SwiftKey crash, cache issue.',
        description: "The onscreen keyboard refuses to pop up when you tap a text field, or it closes automatically while you are typing.",
        causes: [
          "Keyboard app (Gboard/SwiftKey) has crashed",
          "Internal system memory (RAM) is full",
          "Bluetooth keyboard is connected locally (disabling the onscreen one)",
          "Software conflict with a specific app"
        ],
        tips: [
          "Clear the cache of your keyboard app",
          "Turn off Bluetooth to ensure no hidden keyboard is connected",
          "Try switching to a different keyboard app",
          "Restart the phone"
        ],
        technicianNote: "This is almost exclusively a software issue. Clearing the 'App Data' for the keyboard app or the 'Google Play Services' usually resolves the disappearing keyboard bug.",
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Force Stop:</strong> (Android) Settings → Apps → Gboard (or your keyboard) → Force Stop.' },
            { text: '<strong>Clear Cache:</strong> (Android) Settings → Apps → Gboard → Storage → Clear Cache. <span class="screenshot-hint">📷 Suggestion: Screenshot of Gboard app storage settings.</span>' },
            { text: '<strong>Update App:</strong> Go to App Store/Play Store and ensure the keyboard app is up to date.' }
        ]
    },
    'mobile-slow-performance': {
        title: 'Slow Performance',
        summary: 'Close background apps, check battery health.',
        description: "The phone feels sluggish, animations are choppy, and apps take several seconds to open. This happens even on relatively new devices.",
        causes: [
          "Background apps consuming too much CPU/RAM",
          "Internal storage is nearly full (less than 5% free)",
          "Battery health is low, causing 'Performance Throttling'",
          "System OS is outdated or incompatible with old apps"
        ],
        tips: [
          "Free up storage by deleting large videos/caches",
          "Close all background apps and restart",
          "Disable 'Reduce Motion' or 'Developer Animations'",
          "Check battery health for throttling signs"
        ],
        technicianNote: "If a phone is slow even after a factory reset, the bottleneck is either the failing battery (reducing voltage) or the internal storage chip (wearing out).",
        category: 'performance', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Close Apps:</strong> Swipe up from bottom (or hit Recents) and "Clear All". <span class="screenshot-hint">📷 Suggestion: Screenshot of closing all background apps.</span>' },
            { text: '<strong>Battery Health:</strong> Old batteries allow less peak power, causing the CPU to throttle speed. Check battery health. <span class="screenshot-hint">📷 Suggestion: Screenshot of Battery Health settings.</span>' },
            { text: '<strong>Reduce Motion:</strong> (iOS) Settings → Accessibility → Motion → Reduce Motion. Makes phone feel snappier.' }
        ]
    },
    'storage-full-mobile': {
        title: 'Storage Full',
        summary: 'Delete photos, offload apps, clear WhatsApp.',
        description: "You get a \"Storage Almost Full\" warning and can no longer take photos or update apps. A full phone becomes slow, unstable, and may eventually refuse to boot up.",
        causes: [
            "Too many high-resolution photos and 4K videos",
            "Large app caches (especially Social Media and Streaming apps)",
            "System \"Other\" or \"System Data\" taking up too much room",
            "Many unused apps taking up space",
            "Download folder filled with old PDF files and documents",
        ],
        tips: [
            "Use cloud services like Google Photos or iCloud to back up photos and delete them from the device.",
            "Check Settings > Storage to see exactly what is taking up the most space.",
            "Clear cache for apps like TikTok, Instagram, and Telegram — they can store gigabytes of junk data.",
            "Delete old \"Message\" threads with large attachments (videos and GIFs).",
        ],
        technicianNote: "Internal storage cannot be physically upgraded on most modern smartphones. If you are constantly out of space, a technician can help you perform a \"Clean Install\" of the OS to clear out system junk that normal cleanup tools cannot reach.",
        category: 'data', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>WhatsApp Media:</strong> WhatsApp → Settings → Storage and Data → Manage Storage. Delete large videos. <span class="screenshot-hint">📷 Suggestion: Screenshot of WhatsApp "Manage Storage" screen.</span>' },
            { text: '<strong>Offload Apps:</strong> (iOS) Settings → General → iPhone Storage. Enable "Offload Unused Apps" to save space without losing data. <span class="screenshot-hint">📷 Suggestion: Screenshot of iPhone Storage settings.</span>' },
            { text: '<strong>Google Photos:</strong> Back up photos to the cloud and use "Free up space" to delete local copies.' }
        ]
    },
    'play-store-crash': {
        title: 'Google Play Store Crash',
        summary: 'Clear services cache, remove account.',
        description: "The Google Play Store app closes immediately when opened, or shows a 'Connection Error' despite having internet.",
        causes: [
          "Corrupted cache in Play Store or Google Play Services",
          "Incorrect System Date & Time (blocks security certificates)",
          "Google account authentication error",
          "System software update pending"
        ],
        tips: [
          "Set 'Date & Time' to 'Set Automatically'",
          "Clear cache and data for 'Google Play Store'",
          "Remove and re-add your Google account",
          "Check for system updates"
        ],
        technicianNote: "Play Store errors are often tied to 'Google Play Services'. If clearing data doesn't help, a 'FOTA' (Firmware Over The Air) update or a manual firmware flash may be needed.",
        category: 'software', difficulty: 'Medium', os: ['Android'],
        steps: [
            { text: '<strong>Clear Services:</strong> Settings → Apps → Google Play Services → Storage → Clear All Data. <span class="screenshot-hint">📷 Suggestion: Screenshot of Play Services App Info.</span>' },
            { text: '<strong>Remove Account:</strong> Settings → Accounts → Google → Remove Account. Then add it back. Syncs everything fresh.' },
            { text: '<strong>Uninstall Updates:</strong> Settings → Apps → Google Play Store → Uninstall Updates. It will auto-update to latest later.' }
        ]
    },
    'imessage-error': {
        title: 'iMessage Activation Error',
        summary: 'Check time zone, carrier SMS, network.',
        description: "Your iMessages fail to activate, show 'Waiting for Activation', or send as green SMS bubbles instead of blue ones.",
        causes: [
          "No SMS balance to send the hidden activation text",
          "Incorrect 'Date & Time' settings",
          "Interrupted internet connection during handshake",
          "Carrier hasn't enabled iMessage for your number"
        ],
        tips: [
          "Toggle iMessage OFF and ON in Settings",
          "Set 'Date & Time' to 'Set Automatically'",
          "Sign out of your Apple ID and sign back in",
          "Contact your carrier to check for internal SMS blocks"
        ],
        technicianNote: "iMessage is a server-side Apple service. If it fails after a reset and with a working SIM, the issue is usually an Apple ID lockdown or a carrier-side routing error. Hardware is rarely the cause.",
        category: 'software', difficulty: 'Medium', os: ['iOS'],
        steps: [
            { text: '<strong>Check Time Zone:</strong> Settings → General → Date & Time. Must be "Set Automatically". <span class="screenshot-hint">📷 Suggestion: Screenshot of Date & Time "Set Automatically".</span>' },
            { text: '<strong>Toggle iMessage:</strong> Settings → Messages. Turn iMessage OFF, wait 10s, turn ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of iMessage toggle.</span>' },
            { text: '<strong>SMS Ability:</strong> You need ability to send SMS (text) locally for activation to verify your number.' }
        ]
    },
    'airdrop-fails': {
        title: 'AirDrop Not Working',
        summary: 'Bluetooth/Wi-Fi off, contacts only mode.',
        description: "Other Apple devices don't show up in the AirDrop menu, or the transfer fails immediately after starting.",
        causes: [
          "Wi-Fi or Bluetooth is turned off on either device",
          "AirDrop is set to 'Receiving Off' or 'Contacts Only'",
          "Personal Hotspot is active (precludes AirDrop usage)",
          "The receiving device is locked or asleep"
        ],
        tips: [
          "Set AirDrop to 'Everyone for 10 Minutes' to test",
          "Turn OFF 'Personal Hotspot' on both phones",
          "Keep devices within 30 feet of each other",
          "Toggle Wi-Fi and Bluetooth OFF/ON"
        ],
        technicianNote: "AirDrop depends on 'AWDL' (Apple Wireless Direct Link). If AirDrop fails consistently but Wi-Fi works, the Bluetooth module might be weak or failing to negotiate the peer-to-peer handshake.",
        category: 'connectivity', difficulty: 'Easy', os: ['iOS'],
        steps: [
            { text: '<strong>Everyone Mode:</strong> Settings → General → AirDrop. Set to "Everyone for 10 Minutes" to rule out contact syncing bugs. <span class="screenshot-hint">📷 Suggestion: Screenshot of AirDrop settings.</span>' },
            { text: '<strong>Wake Screen:</strong> The receiving device must be awake and unlocked.' },
            { text: '<strong>Toggle Radios:</strong> Turn Wi-Fi and Bluetooth OFF and back ON for both devices.' }
        ]
    },
    'siri-issues': {
        title: 'Siri Not Responding',
        summary: 'Check Hey Siri, microphone, internet.',
        description: "Siri doesn't respond to 'Hey Siri', or says it's having trouble connecting to the internet even when you have signal.",
        causes: [
          "Microphone is muffled or clogged with dirt",
          "Hey Siri is not retrained to your voice",
          "Low Power Mode is limiting background Siri features",
          "Server-side outage at Apple"
        ],
        tips: [
          "Retrain the 'Hey Siri' voice model",
          "Check if Siri is allowed on the Lock Screen",
          "Record a Voice Memo to test the microphone",
          "Reset your network settings"
        ],
        technicianNote: "Siri requires a clear signal from the front-facing microphone. If Siri fails but speakerphone works, the secondary noise-canceling mic might be clogged or faulty.",
        category: 'software', difficulty: 'Easy', os: ['iOS'],
        steps: [
            { text: '<strong>Listen for "Hey Siri":</strong> Settings → Siri & Search. Toggle "Listen for Hey Siri" off and on to retrain voice. <span class="screenshot-hint">📷 Suggestion: Screenshot of Siri & Search settings.</span>' },
            { text: '<strong>Check Mic:</strong> Record a voice memo. If silent, your mic is broken, not Siri. <span class="screenshot-hint">📷 Suggestion: Screenshot of Voice Memos app.</span>' },
            { text: '<strong>Low Power Mode:</strong> Siri is often disabled or limited in Low Power Mode. Charge your phone.' }
        ]
    },
    'google-assistant-broken': {
        title: 'Google Assistant Broken',
        summary: 'Retrain Voice Match, check default app.',
        description: "Google Assistant doesn't trigger with 'Hey Google', or the voice model fails to recognize you.",
        causes: [
          "Microphone permission is disabled for the Google App",
          "Voice Match needs to be retrained",
          "Power saving mode is killing the 'Always Listening' process",
          "The Google App cache is corrupted"
        ],
        tips: [
          "Retrain 'Voice Match' in Assistant settings",
          "Ensure Google App has 'Microphone' permissions",
          "Turn off 'Battery Optimization' for the Google app",
          "Clear the Google App cache"
        ],
        technicianNote: "This is purely a software and permission issue. Resetting the 'Google App' to factory defaults (Uninstalling Updates) and re-updating usually fixes nearly all Assistant bugs.",
        category: 'software', difficulty: 'Easy', os: ['Android'],
        steps: [
            { text: '<strong>Retrain Voice:</strong> Google App → Settings → Google Assistant → Hey Google & Voice Match → Retrain Voice Model. <span class="screenshot-hint">📷 Suggestion: Screenshot of Assistant Voice Match settings.</span>' },
            { text: '<strong>Default App:</strong> Settings → Apps → Default apps → Digital assistant app. Ensure Google is selected. <span class="screenshot-hint">📷 Suggestion: Screenshot of Default Digital Assistant app settings.</span>' },
            { text: '<strong>Microphone Access:</strong> Ensure Google app has permission to use the microphone.' }
        ]
    },
    'notification-delay': {
        title: 'Notification Delay',
        summary: 'Battery optimization, background data.',
        description: "You receive messages or alerts several minutes or hours after they were sent, or only when you open the app.",
        causes: [
          "'Battery Optimization' or 'Sleep' mode is killing background apps",
          "'Data Saver' is preventing background sync",
          "DND (Do Not Disturb) is silently suppressing alerts",
          "Weak background signal in specific locations"
        ],
        tips: [
          "Set critical apps to 'Unrestricted' battery usage",
          "Disable 'Data Saver' for messaging apps",
          "Disable 'Adaptive Battery' in system settings",
          "Check 'Background Data' toggles"
        ],
        technicianNote: "On Android, manufacturers like RAM-management (Doze mode) often aggressively kill apps. Changing these 'Optimization' settings is the only way to ensure real-time alerts.",
        category: 'software', difficulty: 'Medium', os: ['Android'],
        steps: [
            { text: '<strong>Battery Optimization:</strong> Settings → Apps → (App Name) → Battery. Set to "Unrestricted". <span class="screenshot-hint">📷 Suggestion: Screenshot of App Battery usage settings.</span>' },
            { text: '<strong>Background Data:</strong> Settings → Apps → (App Name) → Mobile data. Allow background data usage.' },
            { text: '<strong>Adaptive Battery:</strong> Settings → Battery → Adaptive Battery. Turn OFF if it keeps killing apps.' }
        ]
    },
    'alarm-no-ring': {
        title: 'Alarm Didn’t Ring',
        summary: 'Check volume, Do Not Disturb sound settings.',
        description: "Your alarm shows as 'Missed' in the morning, or didn't make any sound at the scheduled time.",
        causes: [
          "Separate 'Alarm Volume' slider is at zero",
          "Do Not Disturb (DND) is configured to silence alarms",
          "'Silence' or 'Mute' physical switch is toggled (on some models)",
          "Clock app battery optimization is too aggressive"
        ],
        tips: [
          "Set a test alarm for 1 minute from now to verify volume",
          "Check DND 'Exceptions' and allow alarms",
          "Ensure you didn't confuse AM and PM",
          "Update your Clock app"
        ],
        technicianNote: "This is a software/configuration-only issue. If it persists, try a third-party alarm app to see if the system Clock app has been corrupted.",
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Alarm Volume:</strong> Android separates "Ring" and "Alarm" volume. Settings → Sound → Alarm Volume. <span class="screenshot-hint">📷 Suggestion: Screenshot of Sound settings showing Alarm volume slider.</span>' },
            { text: '<strong>Check AM/PM:</strong> Ensure you didn\'t set it for 7:00 PM instead of 7:00 AM. <span class="screenshot-hint">📷 Suggestion: Screenshot of setting an alarm time.</span>' },
            { text: '<strong>Do Not Disturb:</strong> Settings → Sound → Do Not Disturb → Alarms & other interruptions. Allow Alarms.' }
        ]
    },
    'hotspot-fails': {
        title: 'Hotspot Not Working',
        summary: 'APN settings, carrier plan, band selection.',
        description: "Other devices can see your hotspot but cannot connect, or your hotspot keeps turning itself off automatically.",
        causes: [
            "Your carrier plan does not include tethering/hotspot data",
            "Too many devices are already connected to your phone",
            "The hotspot password is too complex or incorrect",
            "Data Saver mode is preventing the hotspot from sharing data",
        ],
        tips: [
            "Change your Hotspot password to something simpler for testing.",
            "Set the APN protocol to IPv4/IPv6 in the network settings.",
            "Limit the hotspot to only 1 connected device at a time.",
        ],
        technicianNote: "Hotspot failure is almost always a carrier restriction or a software configuration issue. A technician can check if your device firmware is blocked from tethering by your service provider.",
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Plan Check:</strong> Does your carrier plan include hotspot data? Many unlimited plans cap it.' },
            { text: '<strong>APN Settings:</strong> (Android) Settings → Network → Mobile Network → Access Point Names. Ensure "APN Type" includes "dun". <span class="screenshot-hint">📷 Suggestion: Screenshot of APN settings.</span>' },
            { text: '<strong>Band:</strong> Change "APN Band" from 5GHz to 2.4GHz for better compatibility with older devices. <span class="screenshot-hint">📷 Suggestion: Screenshot of Hotspot Band settings (2.4GHz vs 5GHz).</span>' }
        ]
    },
    'nfc-fails': {
        title: 'NFC Not Working',
        summary: 'Case interference, NFC off, wallet app.',
        description: "Mobile payments (Apple Pay / Google Pay) don't trigger when you hold the phone near a card reader.",
        causes: [
          "Thick wallet case or magnetic card blocking the signal",
          "NFC is toggled OFF in settings (Android)",
          "System software update pending for the secure enclave",
          "Physical NFC antenna failure"
        ],
        tips: [
          "Remove the case and try the payment again",
          "Ensure NFC is 'Enabled' in connection settings",
          "Restart the phone before a test payment",
          "Add the card again to your Wallet app"
        ],
        technicianNote: "The NFC antenna is often on the back of the phone, near the camera. If you've had a back glass repair, the antenna might have been torn or not reconnected properly.",
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Check Toggle:</strong> (Android) Quick Settings. Ensure NFC is ON. <span class="screenshot-hint">📷 Suggestion: Screenshot of Quick Settings NFC tile.</span>' },
            { text: '<strong>Remove Case:</strong> Thick wallet cases with magnetic cards block the signal.' },
            { text: '<strong>Tap Location:</strong> Locate the NFC chip (usually top back). Tap that exact spot to the reader. <span class="screenshot-hint">📷 Suggestion: Diagram of NFC chip location.</span>' }
        ]
    },
    'video-playback-error': {
        title: 'Video Playback Error',
        summary: 'Codec issue, internet speed, browser.',
        description: "Videos in your browser or social media apps show 'Playback Error', 'Format Not Supported', or just keep buffering.",
        causes: [
          "Outdated browser or app version",
          "Missing video codecs for specific formats (MKV/HEVC)",
          "Slow internet speed unable to buffer the stream",
          "Hardware acceleration glitch in the GPU driver"
        ],
        tips: [
          "Update your app or browser from the store",
          "Try a different browser (e.g., Firefox instead of Chrome)",
          "Clear the app's cache",
          "Restart your router"
        ],
        technicianNote: "If all videos (including local ones) fail, the GPU or the system's HW media decoder is crashing. A factory reset is the first diagnostic step.",
        category: 'software', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Update Browser:</strong> Chrome/Safari updates often include new video codecs.' },
            { text: '<strong>Clear Cache:</strong> Clear the browser cache and cookies. <span class="screenshot-hint">📷 Suggestion: Screenshot of Browser privacy settings.</span>' },
            { text: '<strong>Reduce Quality:</strong> If buffering, the internet is too slow. Drop to 480p.' }
        ]
    },
    'music-stops': {
        title: 'Music Stops Randomly',
        summary: 'Battery optimization killing app, buffer.',
        description: "Your music stops playing randomly every few minutes or whenever you lock your screen.",
        causes: [
          "Battery optimization is closing the music player in the background",
          "Bluetooth connection is dropping temporarily",
          "Buffer exhaustion due to poor network speed",
          "Wired headphones have a loose connection triggering 'Auto-Pause'"
        ],
        tips: [
          "Set music app to 'Unrestricted' battery usage",
          "Download playlists for offline listening",
          "Try different headphones to rule out a loose jack",
          "Toggle Bluetooth off/on"
        ],
        technicianNote: "If this happens with wired headphones, it's usually a dirty headphone jack registering a 'phantom' unplug. Cleaning the jack usually stops the auto-pausing.",
        category: 'software', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Unrestricted Battery:</strong> Set your music app (Spotify/Apple Music) battery usage to "Unrestricted". <span class="screenshot-hint">📷 Suggestion: Screenshot of App Battery settings.</span>' },
            { text: '<strong>Download Songs:</strong> If streaming cuts out, download the playlist for offline play to rule out network issues.' },
            { text: '<strong>Bluetooth Range:</strong> If on headphones, keep the phone in a front pocket, not a backpack (body blocks signal).' }
        ]
    },
    'camera-blurry': {
        title: 'Camera Blurry',
        summary: 'Smudged lens, focus issue.',
        description: "Your camera photos look fuzzy, out of focus, or hazy. This is usually caused by something on the lens or a failure of the mechanical autofocus system inside the phone.",
        causes: [
            "Fingerprints, oil, or smudges on the glass lens",
            "A third-party case blocking the autofocus laser/sensor",
            "The OIS (Optical Image Stabilization) magnet has failed after a drop",
            "Condensation or moisture trapped inside the lens glass",
        ],
        tips: [
            "Always clean the lens with a microfiber cloth before taking a photo.",
            "Gently tap the back of the phone near the camera — sometimes this \"un-sticks\" a jammed autofocus motor.",
            "Remove your case to ensure it isn't reflecting light back into the lens.",
        ],
        technicianNote: "If the camera is blurry even after cleaning and removing the case, the internal OIS motor or focus assembly is broken. A technician can replace the entire camera module to restore sharp focus.",
        category: 'hardware', difficulty: 'Easy', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Wipe Lens:</strong> 99% of blurry photos are due to finger grease on the lens. Wipe with shirt. <span class="screenshot-hint">📷 Suggestion: Photo of wiping a camera lens.</span>' },
            { text: '<strong>Tap to Focus:</strong> Tap the screen on the subject to force the autofocus motor to move. <span class="screenshot-hint">📷 Suggestion: Screenshot of Camera viewfinder with focus box.</span>' },
            { text: '<strong>Remove Magnet:</strong> Magnetic cases interfere with the optical image stabilization (OIS).' }
        ]
    },
    'update-stuck-mobile': {
        title: 'Update Stuck',
        summary: 'Storage space, Wi-Fi connection.',
        description: "The system update progress bar hasn't moved for hours, or it keeps saying 'Checking for Update...' indefinitely.",
        causes: [
          "Insufficient free storage space (needs 2x the update size)",
          "Unstable Wi-Fi connection during the download",
          "Low battery (most phones need 50%+ to start)",
          "Corrupted update cache file"
        ],
        tips: [
          "Free up at least 5GB of internal storage",
          "Connect to a different Wi-Fi network",
          "Plug in the charger",
          "Delete the downloaded update and start over"
        ],
        technicianNote: "A 'stuck' update can sometimes soft-brick a phone. If it won't move after 2 hours, a technician can 'Force Flash' the update using a PC and specialized software.",
        category: 'system', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Free Space:</strong> You need at least 2x the update size free. Delete videos. <span class="screenshot-hint">📷 Suggestion: Screenshot of Storage settings.</span>' },
            { text: '<strong>Power:</strong> Plug into a charger. Updates often won\'t install below 50% battery.' },
            { text: '<strong>Delete Update:</strong> (iOS) iPhone Storage. Find the "iOS Update" file, delete it, and re-download. <span class="screenshot-hint">📷 Suggestion: Screenshot of iPhone Storage showing update file.</span>' }
        ]
    },
    'factory-reset-stuck': {
        title: 'Factory Reset Stuck',
        summary: 'Wait it out, force restart.',
        description: "The phone has been on the 'Erasing' or logo screen for an unusually long time after you initiated a reset.",
        causes: [
          "Large amount of data being encrypted/wiped",
          "Internal storage (NAND) failure during the wipe process",
          "Battery died during the reset process",
          "Software hang in the recovery partition"
        ],
        tips: [
          "Wait at least 1 hour (resets can be slow)",
          "Ensure the phone is plugged into power",
          "Try a 'Force Restart' if stuck for over 3 hours",
          "Boot into Recovery Mode to try the wipe again"
        ],
        technicianNote: "If a factory reset fails or hangs permanently, the motherboard's main storage chip is likely physically failing (End of Life for the NAND chip).",
        category: 'system', difficulty: 'Hard', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Wait:</strong> It can take up to 1 hour. Do not interrupt it.' },
            { text: '<strong>Force Restart:</strong> If stuck for >2 hours, force restart. If it boots to a computer icon, you need to restore via PC. <span class="screenshot-hint">📷 Suggestion: Diagram of Force Restart button combo.</span>' }
        ]
    },
    'water-damage': {
        title: 'Water Damage',
        summary: 'Turn off, silica gel, do not charge.',
        description: "Your phone was submerged in liquid or splashed, and now it isn't working correctly or won't turn on at all.",
        causes: [
            "Liquid has reached the internal motherboard",
            "Corrosion has started on the battery connectors",
            "The screen or speakers have been short-circuited by moisture",
        ],
        tips: [
            "TURN OFF the phone immediately.",
            "DO NOT use a hairdryer or put it in rice — this can trap moisture or melt components.",
            "Pat dry and place the phone in a well-ventilated area with a fan.",
            "Remove the SIM tray to allow air to circulate inside.",
        ],
        technicianNote: "Stop! Every hour the liquid stays inside increases corrosion. A technician can perform an \"Ultrasonic Cleaning\" on the motherboard to remove the liquid and corrosion before permanent damage occurs. This is the only reliable way to save a water-damaged phone.",
        category: 'hardware', difficulty: 'Hard', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Turn OFF:</strong> Immediately power down. Do not verify if it works.' },
            { text: '<strong>Silica Gel:</strong> Put in a sealed bag with silica gel packets (NOT rice; rice dust kills ports). Wait 48 hours. <span class="screenshot-hint">📷 Suggestion: Photo of phone in bag with silica gel.</span>' },
            { text: '<strong>Do Not Charge:</strong> Plugging in a wet phone causes short circuits holding the most power. <span class="screenshot-hint">📷 Suggestion: Warning icon about wet charging port.</span>' }
        ]
    },
    'bluetooth-audio-delay': {
        title: 'Bluetooth Audio Delay',
        summary: 'Sync issues with video, codec settings.',
        description: "The sound in your headphones is out of sync with the video on the screen (audio lag).",
        causes: [
          "Using a high-latency Bluetooth codec (SBC instead of AAC/aptX)",
          "Distance or physical obstacles between phone and headphones",
          "Software audio processing (Equalizers) adding lag",
          "Outdated headphone firmware"
        ],
        tips: [
          "Restart both the phone and the headphones",
          "Try 'Game Mode' if your headphones have it",
          "Change bluetooth codec in 'Developer Options'",
          "Move the phone closer to the headphones"
        ],
        technicianNote: "Audio lag is an inherent limitation of Bluetooth. If it happened suddenly, it's usually a codec mismatch or a driver bug in the recently updated OS.",
        category: 'connectivity', difficulty: 'Medium', os: ['iOS', 'Android'],
        steps: [
            { text: '<strong>Unpair/repair:</strong> Forget the device in Bluetooth settings and repair it.' },
            { text: '<strong>Codec Change:</strong> (Android) Developer Options → Bluetooth Audio Codec. Try AAC or SBC instead of LDAC/aptX. <span class="screenshot-hint">📷 Suggestion: Screenshot of Developer Options Bluetooth Codec.</span>' },
            { text: '<strong>Game Mode:</strong> Many earbuds have a "Game Mode" or low-latency mode. Check the manual to enable it.' }
        ]
    }
};
