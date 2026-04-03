/**
 * share.js - Global Social Sharing Utility
 */

window.Share = {
    platforms: {
        whatsapp: (url, title) => `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ': ' + url)}`,
        facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: (url, title) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        linkedin: (url, title) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        telegram: (url, title) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    },

    open(platform) {
        console.log(`Sharing to ${platform}...`);
        const url = window.location.href;
        const title = document.title;
        
        if (platform === 'copy') {
            this.copyLink(url);
            return;
        }

        const shareUrl = this.platforms[platform](url, title);
        
        // Open in a centered popup window
        const width = 600;
        const height = 500;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        
        window.open(shareUrl, 'ShareWindow', `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`);
    },

    copyLink(url) {
        navigator.clipboard.writeText(url).then(() => {
            this.showToast('Link copied to clipboard! 🔗');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
            this.showToast('Link copied! 🔗');
        });
    },

    showToast(message) {
        let toast = document.querySelector('.share-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'share-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('visible');
        setTimeout(() => toast.classList.remove('visible'), 3000);
    }
};
