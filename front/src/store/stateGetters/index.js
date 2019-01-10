export const getFilteredList = (state) => {
    return state.filteredList;
}

export const getFilterObject = (state) => {
    return state.filterObject
}

export const getFilmInfo = (state) => {
    return state.selectedFilmInfo;
}

export const getHallPlan = (state) => {
    return state.hallPlan
}

export const getOrderInfo = (state) => {
    return state.orderList;
}

export const getFilterOptions = (state) => {
    return state.filterOptions;
}

export const getLoginStatus = (state) => {
    return state.isLoggedIn;
}

export const getAdminStatus = (state) => {
    return state.isAdmin;
}
