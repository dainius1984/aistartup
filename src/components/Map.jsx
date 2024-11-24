import React, { useState } from 'react';
import { 
  Brain, 
  Search, 
  Database, 
  Network,
  LineChart,
} from 'lucide-react';

const NeuronPath = ({ x1, y1, x2, y2 }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
    <defs>
      <linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
        <stop offset="50%" stopColor="rgba(147, 197, 253, 0.8)" />
        <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
      </linearGradient>
    </defs>
    <line 
      x1={`${x1}%`} 
      y1={`${y1}%`} 
      x2={`${x2}%`} 
      y2={`${y2}%`} 
      stroke="rgba(59, 130, 246, 0.2)"
      strokeWidth="1.5"
    />
    <circle r="3" fill="url(#neuronGradient)">
      <animateMotion
        path={`M${x1},${y1} L${x2},${y2}`}
        dur="2s"
        repeatCount="indefinite"
      >
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </animateMotion>
    </circle>
  </svg>
);

const MapNode = ({ x, y, icon: Icon, title, onClick, isActive, connections }) => (
  <>
    {connections?.map((conn, idx) => (
      <NeuronPath key={idx} x1={x} y1={y} x2={conn.x} y2={conn.y} />
    ))}
    <div 
      className={`absolute cursor-pointer transition-all duration-300 z-20 ${
        isActive ? 'scale-110' : 'hover:scale-105'
      }`}
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      onClick={onClick}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 ${
          isActive ? 'border-blue-500' : 'border-blue-200'
        } backdrop-blur-sm transition-all duration-300 group-hover:shadow-blue-500/20 flex items-center justify-center`}>
          <Icon className={`w-8 h-8 ${
            isActive ? 'text-blue-600' : 'text-blue-500'
          } transition-colors duration-300 group-hover:text-blue-600`} />
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </div>
      <div className="mt-3 text-center font-medium text-white text-sm bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">
        {title}
      </div>
    </div>
  </>
);

const AIMap = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const agents = [
    {
      id: 1,
      title: "RAG Agent",
      icon: Search,
      x: 50,
      y: 48, // Centered slightly above middle
      connections: [
        { x: 28, y: 25 },
        { x: 72, y: 25 },
        { x: 22, y: 75 },
        { x: 78, y: 75 }
      ]
    },
    {
      id: 2,
      title: "Data Analyzer",
      icon: LineChart,
      x: 28,
      y: 25, // Top left, but not too close to edge
      connections: [
        { x: 50, y: 48 },
        { x: 72, y: 25 }
      ]
    },
    {
      id: 3,
      title: "Neural Engine",
      icon: Brain,
      x: 72,
      y: 25, // Top right, balanced with Data Analyzer
      connections: [
        { x: 50, y: 48 },
        { x: 28, y: 25 }
      ]
    },
    {
      id: 4,
      title: "Knowledge Graph",
      icon: Network,
      x: 22,
      y: 75, // Bottom left, slightly asymmetric
      connections: [
        { x: 50, y: 48 },
        { x: 78, y: 75 }
      ]
    },
    {
      id: 5,
      title: "Data Pipeline",
      icon: Database,
      x: 78,
      y: 75, // Bottom right, balanced with Knowledge Graph
      connections: [
        { x: 50, y: 48 },
        { x: 22, y: 75 }
      ]
    }
  ];

  return (
    <div className="relative w-full h-[800px] px-[50px] py-[100px] rounded-lg overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#070B14]/50" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/img/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      {/* Enhanced overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: 'cover, cover, 20px 20px'
        }}
      />

      {/* Content container */}
      <div className="relative w-full h-full z-10">
        {agents.map(agent => (
          <MapNode
            key={agent.id}
            x={agent.x}
            y={agent.y}
            icon={agent.icon}
            title={agent.title}
            isActive={selectedAgent?.id === agent.id}
            onClick={() => setSelectedAgent(agent)}
            connections={agent.connections}
          />
        ))}
      </div>
    </div>
  );
};

export default AIMap;