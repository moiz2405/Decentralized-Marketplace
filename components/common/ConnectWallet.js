// components/common/ConnectWallet.js
import { useWallet } from '../../context/WalletContext';

const ConnectWallet = () => {
    const { connectMetaMask, account, loading, error } = useWallet();

    return (
        <div>
            <button onClick={connectMetaMask} disabled={loading}>
                {loading ? 'Connecting...' : account ? `Connected: ${account}` : 'Connect MetaMask'}
            </button>
            {error && <p className="text-red-500">{error}</p>} {/* Display error message if any */}
        </div>
    );
};

export default ConnectWallet;
