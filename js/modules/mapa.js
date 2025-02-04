export class NewMap {
    constructor(lat, long, zoom = 15, markerText = 'Estamos aqui') {
        this.latitude = lat;
        this.longitude = long;
        this.zoom = zoom;
        this.markerText = markerText;
        this.map = null;
    }

    init() {
        this.map = L.map('map').setView([this.latitude, this.longitude], this.zoom);
        this.loadMap();
        this.addMarker();
        this.adjustSize();
    }

    loadMap() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker() {
        L.marker([this.latitude, this.longitude]).addTo(this.map)
            .bindPopup(this.markerText)
            .openPopup();
    }

    adjustSize() {
        setTimeout(() => {
            this.map.invalidateSize();
        }, 500);
    }
}
