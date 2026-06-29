async function geocode(address) {

    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`,
        {
            headers: {
                "User-Agent": "Wanderlust/1.0"
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to contact geocoding service.");
    }

    const data = await response.json();

    if (data.length === 0) {
        throw new Error("Location not found.");
    }

    return {
        lat: Number(data[0].lat),
        lng: Number(data[0].lon)
    };
}

module.exports = geocode;