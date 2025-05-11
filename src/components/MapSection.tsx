
import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

export function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Note: In a real implementation, you would use a proper map library like Google Maps or Mapbox
    // This is a placeholder that shows a static map image
    const loadMap = () => {
      if (!mapRef.current) return;
      
      // Create image element for static map
      const mapImage = document.createElement('img');
      mapImage.src = "https://api.mapbox.com/styles/v1/mapbox/light-v10/static/28.9784,41.0082,13,0/800x400?access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2tvZHRzamlxMmJoejMxbXJ2Nzl2ZjZvZCJ9.L7aqSoU0uTQRNiyKKKqgqw";
      mapImage.alt = "Office Location Map";
      mapImage.className = "w-full h-full object-cover rounded-xl";
      
      // Clear the container and add the image
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(mapImage);
    };
    
    loadMap();
    
    // In a real implementation, you would need to clean up any map instance
    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center">Find Us</h2>
        
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-md mb-6">
          <div ref={mapRef} className="absolute inset-0"></div>
          
          {/* Map Pin */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <MapPin size={40} className="text-orange-500" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
            <h3 className="font-medium mb-1">Address</h3>
            <p className="text-muted-foreground">
              123 Architecture Street<br />
              Istanbul, Turkey 34000
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
            <h3 className="font-medium mb-1">Working Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: By appointment only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
