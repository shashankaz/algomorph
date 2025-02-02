export const Logs = ({ log }) => {
  return (
    <div className="flex flex-col gap-4 border border-gray-900 p-4 rounded-xl overflow-x-auto">
      <h1 className="text-lg font-medium">Logs</h1>
      <table className="min-w-full divide-y divide-gray-900">
        <thead className="text-left">
          <tr>
            <th className="px-3 pb-3 text-sm font-medium">Client Details</th>
            <th className="px-3 pb-3 text-sm font-medium">Country Name</th>
            <th className="px-3 pb-3 text-sm font-medium">Device Name</th>
            <th className="px-3 pb-3 text-sm font-medium">IP</th>
            <th className="px-3 pb-3 text-sm font-medium">OS Details</th>
            <th className="px-3 pb-3 text-sm font-medium">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-900">
          {log.length > 0 ? (
            log?.slice(0, 5).map((logs, index) => (
              <tr key={index}>
                <td className="px-3 py-3 text-sm text-gray-700 capitalize">
                  {logs.clientName} - {logs.clientType} - {logs.clientVersion}
                </td>
                <td className="px-3 py-3 text-sm text-gray-700">
                  {logs.countryName}
                </td>
                <td className="px-3 py-3 text-sm text-gray-700 capitalize">
                  {logs.deviceName}
                </td>
                <td className="px-3 py-3 text-sm text-gray-700">{logs.ip}</td>
                <td className="px-3 py-3 text-sm text-gray-700">
                  {logs.osName} - {logs.osVersion}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {new Date(logs.time).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center pt-3 text-sm">
                No logs found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
