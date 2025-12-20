import { Card, CardContent } from '@/components/ui/card';

interface ThreatItem {
  threat: string;
  likelihood: 'Low' | 'Medium' | 'High' | 'Critical';
  impact: 'Low' | 'Medium' | 'High' | 'Critical';
  mitigation: string;
}

interface ThreatMatrixProps {
  threats: ThreatItem[];
  title?: string;
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return 'bg-red-500/20 text-red-300 border-red-400/30';
    case 'High':
      return 'bg-orange-500/20 text-orange-300 border-orange-400/30';
    case 'Medium':
      return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
    case 'Low':
      return 'bg-green-500/20 text-green-300 border-green-400/30';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
  }
};

export const ThreatMatrix = ({ threats, title = 'Threat Analysis' }: ThreatMatrixProps) => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 text-gray-300 font-semibold">Threat</th>
              <th className="text-center p-4 text-gray-300 font-semibold">Likelihood</th>
              <th className="text-center p-4 text-gray-300 font-semibold">Impact</th>
              <th className="text-left p-4 text-gray-300 font-semibold">Mitigation</th>
            </tr>
          </thead>
          <tbody>
            {threats.map((threat, index) => (
              <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                <td className="p-4">
                  <span className="text-white font-medium">{threat.threat}</span>
                </td>
                <td className="p-4 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.likelihood)}`}>
                    {threat.likelihood}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.impact)}`}>
                    {threat.impact}
                  </span>
                </td>
                <td className="p-4 text-gray-300 text-sm">{threat.mitigation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
