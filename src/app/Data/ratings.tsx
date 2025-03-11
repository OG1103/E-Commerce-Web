import { FC } from 'react';
import { Stack, Rating as MuiRating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface RatingProps {
  value: number;
  reviewCount?: number;
  size?: 'small' | 'medium' | 'large';
  readOnly?: boolean;
  precision?: 0.5 | 1;
  showCount?: boolean;
}

const Rating: FC<RatingProps> = ({
  value,
  reviewCount,
  size = 'small',
  readOnly = true,
  precision = 0.5,
  showCount = true
}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <MuiRating
        value={value}
        readOnly={readOnly}
        precision={precision}
        size={size}
        icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        sx={{
          color: 'warning.main',
          '& .MuiRating-iconEmpty': {
            color: 'text.disabled'
          }
        }}
      />
      {showCount && reviewCount !== undefined && (
        <span style={{ fontSize: size === 'small' ? '0.75rem' : '0.875rem', color: 'text.secondary' }}>
          ({value.toFixed(precision === 0.5 ? 1 : 0)})
          {reviewCount > 0 && ` ${reviewCount} reviews`}
        </span>
      )}
    </Stack>
  );
};

export default Rating;
