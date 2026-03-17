export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {/* Category Badge Skeleton */}
        <div className="mb-4">
          <div className="inline-block h-7 w-24 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        {/* Title Skeleton */}
        <div className="mb-6 space-y-3">
          <div className="h-12 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-12 bg-gray-200 rounded animate-pulse w-3/4"></div>
        </div>

        {/* Author Info Skeleton */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Featured Image Skeleton */}
        <div className="w-full h-[400px] md:h-[500px] mb-12 bg-gray-200 rounded-2xl animate-pulse"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
        </div>
      </div>
    </div>
  );
}
