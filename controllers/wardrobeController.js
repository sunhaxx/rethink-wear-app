// Placeholder for Azure-specific configurations
const azureConfig = {
    storageAccount: process.env.AZURE_STORAGE_ACCOUNT,
    storageKey: process.env.AZURE_STORAGE_KEY,
    containerName: process.env.AZURE_CONTAINER_NAME,
};

const { BlobServiceClient } = require('@azure/storage-blob');

exports.uploadWardrobeItem = async (req, res) => {
    try {
        const blobServiceClient = BlobServiceClient.fromConnectionString(
            `DefaultEndpointsProtocol=https;AccountName=${azureConfig.storageAccount};AccountKey=${azureConfig.storageKey};EndpointSuffix=core.windows.net`
        );
        const containerClient = blobServiceClient.getContainerClient(azureConfig.containerName);

        const blobName = req.file.originalname;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        await blockBlobClient.upload(req.file.buffer, req.file.size);

        res.status(201).json({ message: 'Wardrobe item uploaded', blobName });
    } catch (error) {
        console.error('Error uploading to Azure Blob Storage:', error);
        res.status(500).json({ error: 'Failed to upload wardrobe item' });
    }
};