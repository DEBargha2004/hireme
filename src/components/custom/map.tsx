"use client";

export default function Map({ query }: { query?: string }) {
  const searchParams = new URLSearchParams({
    q: query || "pune",
    key: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
  });
  return (
    <div
      style={{
        overflow: "hidden",
        maxHeight: "100%",
        width: "100%",
        aspectRatio: "16/12",
      }}
    >
      <div
        id="embed-map-canvas"
        style={{ height: "100%", width: "100%", maxWidth: "100%" }}
      >
        <iframe
          style={{ height: "100%", width: "100%", border: 0 }}
          src={
            "https://www.google.com/maps/embed/v1/place" + "?" + searchParams
          }
        ></iframe>
      </div>
    </div>
  );
}
