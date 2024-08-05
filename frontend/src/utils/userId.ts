import { fetchUserData } from "../services/user.services";

export async function getLoggedInUserID(){
    const userData = await fetchUserData();
    const loggedInUserId = userData.id;
    return loggedInUserId
}