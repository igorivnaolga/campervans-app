import {
  CoverActions,
  CoverButtonPrimary,
  CoverButtonSecondary,
  CoverContainer,
  CoverContent,
  CoverOverlay,
  CoverTagline,
  CoverTitle,
} from '../../components/Cover/Cover.styled';

const Cover = () => {
  return (
    <CoverContainer>
      <CoverOverlay>
        <CoverContent>
          <CoverTitle>Cheap travel, amazing places</CoverTitle>
          <CoverTagline>
            Browse campers by city, equipment, and body type. Save favourites and
            book your next trip in a few taps.
          </CoverTagline>
          <CoverActions>
            <CoverButtonPrimary to="/catalog">Browse catalog</CoverButtonPrimary>
            <CoverButtonSecondary to="/favorites">
              Saved vans
            </CoverButtonSecondary>
          </CoverActions>
        </CoverContent>
      </CoverOverlay>
    </CoverContainer>
  );
};
export default Cover;
