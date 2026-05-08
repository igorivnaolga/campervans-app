export const selectCamper = state => state.campervans.items;
export const selectVisibleCampers = state => state.campervans.visibleCampers;
export const selectIsLoading = state => state.campervans.isLoading;
export const selectError = state => state.campervans.error;
export const selectFavorites = state => state.favorites;
export const selectEnquirySubmitStatus = state => state.enquiry.submitStatus;
export const selectEnquirySubmitError = state => state.enquiry.submitError;
export const selectEnquiryLastSource = state => state.enquiry.lastSource;
