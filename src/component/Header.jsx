import { Zap } from 'lucide-react';

export const Header = () => (
  <div className="flex items-center justify-between mb-8">
    <h1 className="text-4xl font-bold text-green-900 flex items-center">
      <Zap className="w-10 h-10 mr-3 tex-600" />
      EV Analytics Dashboard
    </h1>
  </div>
);