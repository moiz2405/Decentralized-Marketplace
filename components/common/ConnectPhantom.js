// components/common/ConnectPhantom.js
import { useWallet } from '../../context/WalletContext';

const ConnectPhantom = () => {
    const { account, connectPhantom, loading, error } = useWallet();

    return (
        <div>
            <button onClick={connectPhantom} disabled={loading}>
                {loading ? 'Connecting...' : account ? `Connected: ${account}` : 'Connect Phantom Wallet'}
            </button>
            {error && <p className="text-red-500">{error}</p>} {/* Display error message if any */}
        </div>
    );
};

export default ConnectPhantom;
