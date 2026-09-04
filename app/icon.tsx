import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Icon component
export default async function Icon() {
  const file = await readFile(join(process.cwd(), 'public/FaceAvatar.png'));
  const src = `data:image/png;base64,${file.toString('base64')}`;

  return new ImageResponse(
    (
      <img
        src={src}
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          objectFit: 'cover',
        }}
      />
    ),
    {
      ...size,
    }
  );
}
