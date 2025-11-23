import React from 'react';
import { X, Rotate3D, Navigation, Info } from 'lucide-react';
import { IMAGES } from '../constants';

interface Viewer360Props {
  isOpen: boolean;
  onClose: () => void;
}

const Viewer360: React.FC<Viewer360Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-6xl h-[80vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        {/* Controls Overlay */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10 bg-gradient-to-b from-black/80 to-transparent">
          <div>
            <h3 className="text-white font-bold text-xl flex items-center gap-2">
              <Rotate3D className="text-accent-500" /> Virtual Clinic Tour
            </h3>
            <p className="text-gray-300 text-sm">Emergency Department • Room 1</p>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition backdrop-blur-sm"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Main Viewport */}
        <div className="w-full h-full relative cursor-move group overflow-hidden">
          {/* Simulated 360 Image */}
          <div 
             className="absolute inset-0 bg-cover bg-center transition-transform duration-[30s] ease-linear hover:scale-110"
             style={{ backgroundImage: `url(${IMAGES.clinic})`, transformOrigin: 'center center' }}
          />
          
          {/* Mock Hotspots */}
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 group/spot">
             <div className="w-8 h-8 bg-accent-500/80 rounded-full border-4 border-white flex items-center justify-center cursor-pointer animate-ping absolute"></div>
             <div className="w-8 h-8 bg-accent-500 rounded-full border-4 border-white flex items-center justify-center cursor-pointer relative z-10 shadow-lg">
                <Info size={16} className="text-white" />
             </div>
             <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 text-white text-xs px-3 py-1 rounded opacity-0 group-hover/spot:opacity-100 transition whitespace-nowrap pointer-events-none">
               Emergency Bay
             </div>
          </div>

          <div className="absolute top-2/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 group/spot">
             <div className="w-8 h-8 bg-primary-500 rounded-full border-4 border-white flex items-center justify-center cursor-pointer relative z-10 shadow-lg hover:scale-110 transition">
                <Navigation size={16} className="text-white" />
             </div>
             <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 text-white text-xs px-3 py-1 rounded opacity-0 group-hover/spot:opacity-100 transition whitespace-nowrap pointer-events-none">
               Go to Waiting Area
             </div>
          </div>
          
          {/* Interaction Hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur text-white px-6 py-3 rounded-full flex items-center gap-3 pointer-events-none">
            <Rotate3D size={20} className="animate-spin-slow" />
            <span className="font-medium text-sm">Drag to look around</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewer360;