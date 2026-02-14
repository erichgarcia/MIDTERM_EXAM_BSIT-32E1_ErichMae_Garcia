// =============================================================================================
// API Calls for Bowling Game Backend
// =============================================================================================
// This module connects the frontend to the .NET Backend API.
// Make sure your .NET Backend is running on port 5035.
// Set VITE_APP_MODE=LIVE in .env.local to use these API calls.

const API_BASE_URL = "http://localhost:5035/api/game"; // Port 5035 matches launchSettings.json

export const createGame = async (playerNames) => {
    const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(playerNames)
    });
    
    if (!response.ok) {
        throw new Error(`Failed to create game: ${response.statusText}`);
    }
    
    return await response.json();
};

export const getGame = async (gameId) => {
    const response = await fetch(`${API_BASE_URL}/${gameId}`);
    
    if (!response.ok) {
        throw new Error(`Failed to get game: ${response.statusText}`);
    }
    
    return await response.json();
};

export const rollBall = async (gameId, playerId, pins) => {
    const response = await fetch(`${API_BASE_URL}/${gameId}/roll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId, pins })
    });
    
    if (!response.ok) {
        throw new Error(`Failed to record roll: ${response.statusText}`);
    }
    
    // Return success - the roll endpoint returns 200 OK without body
    return { success: true };
};
