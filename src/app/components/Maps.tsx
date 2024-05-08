const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

export default function Maps() {
    return (
        <iframe
            width="600"
            height="450"
            style={{ height: "100%", width: "100%", position: "absolute", bottom: 0, left: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=台灣大學學新館`}
        />
    )
}